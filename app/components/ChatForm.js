import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import { send } from '../websocket';

const styles = StyleSheet.create({
	chatForm: {
		height: 60,
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderStyle: 'solid',
		borderTopColor: '#4f8fd0'
	},
	formGroup: {
		flex: 1,
		flexDirection: 'row'
	},
	formLeft: {
		flex: 3,
		backgroundColor: 'white'
	},
	formRight: {
		flex: 1,
		backgroundColor: 'red'
	},
	input: {
		flex: 1,
		padding: 12
	},
	button: {
		flex: 1,
		backgroundColor: '#4f8fd0',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white'
	}
});

class ChatForm extends Component {
	static propTypes = {
		username: React.PropTypes.string
	}
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	sendMessage = () => {
		if(!this.state.text) return;

		send({
			type: 'plain',
			message: this.props.username + ': ' + this.state.text
		})
		this.setState({ text: '' });
	}
	render() {
		return (
			<View style={styles.chatForm}>
				<View style={styles.formGroup}>
					<View style={styles.formLeft}>
						<TextInput 
							style={styles.input} 
							placeholder="Message..." 
							onChangeText={(text) => this.setState({ text })}
							autoCorrect={false}
							underlineColorAndroid="white"
							value={this.state.text}
						/>
					</View>
					<View style={styles.formRight}>
						 <TouchableHighlight style={styles.button} onPress={this.sendMessage}>
							<Text style={styles.buttonText}>Send</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

export default ChatForm;