import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as ChatActions from '../actions/Chat';
import store from '../store';

const styles = StyleSheet.create({
	chatList: {
		flex: 1,
		backgroundColor: '#eee',
		margin: 10
	},
	chatItemText: {
		paddingBottom: 12
	}
});

class ChatList extends Component {
	static propTypes = {
		chatList: React.PropTypes.array
	}
	componentWillMount() {
		store.dispatch({
			type: ChatActions.CHAT_INIT,
			data: ''
		});
	}
	render() {
		return (
			<ScrollView
				style={styles.chatList}
				ref="scrollView"
				onContentSizeChange={ (contentWidth, contentHeight) => {
					// scroll to bottom, but give some delays.
					setTimeout(() => {
						this.refs.scrollView.scrollTo({
							x: contentWidth,
							y: contentHeight,
							animated: true
						});
					}, 300);
				}}>
				{
					this.props.chatList.map((chat, idx) => {
						return (<Text style={styles.chatItemText} key={"chat"+idx}>{chat}</Text>);
					})
				}
			</ScrollView>
		);
	}
}

export default connect(state => {
	let chatList = state.ChatReducer.chatList;

	return {
		chatList: state.ChatReducer.chatList
	};
})(ChatList);