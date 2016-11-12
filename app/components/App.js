import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import ChatApp from './ChatApp';
import { init } from '../websocket';

export default class App extends Component {
	componentDidMount() {
		init();
	}
	render() {
		return (
			<Provider store={store}>
				<ChatApp />
			</Provider>
		);
	}
}