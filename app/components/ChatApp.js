import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	}
});

class ChatApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<NavBar username={this.props.username} connected={this.props.connected} />
				<ChatList connected={this.props.connected} />
				<ChatForm username={this.props.username} connected={this.props.connected} />
			</View>
		);
	}
}

export default connect(state => {
	return {
		username: state.UserReducer.username,
		connected: state.NetworkReducer.connected
	};
})(ChatApp);