import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import prompt from 'react-native-prompt-android';
import { SET_USERNAME } from '../actions/User';
import store from '../store';
import { send } from '../websocket';

const styles = StyleSheet.create({
	navbar: {
		height: 60,
		backgroundColor: '#1a66b3'
	},
	navbarGroup: {
		flex: 1,
		flexDirection: 'row',
	},
	navLeft: {
		flex: 1
	},
	navCenter: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	navRight: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	navbarText: {
		color: 'white'
	}
});

class NavBar extends Component {
	static propTypes = {
		username: React.PropTypes.string
	}
	updateUserName = () => {
		prompt('Enter name.', '', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'OK',
				onPress: (value) => {
					send({
						type: 'system',
						action: 'rename',
						data: value,
						message: this.props.username + ' user change his name to ' + value
					});

					store.dispatch({
						type: SET_USERNAME,
						data: value
					});
				}
			}
		], {
			defaultValue: this.props.username
		})
	}
	render() {
		return (
			<View style={styles.navbar}>
				<View style={styles.navbarGroup}>
					<View style={styles.navLeft}>
					</View>
					<View style={styles.navCenter}>
						<Text style={styles.navbarText}>WebSocket ChatApp</Text>
					</View>
					<View style={styles.navRight}>
						<Button title="Name" onPress={this.updateUserName} />
					</View>
				</View>
			</View>
		);
	}
}

export default NavBar;