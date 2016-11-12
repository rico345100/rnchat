import store from './store';
import * as UserActions from './actions/User';
import * as ChatActions from './actions/Chat';
import * as NetworkActions from './actions/Network';

const socket = null;

export function init() {
	socket = new WebSocket('ws://YOUR_DOMAIN_HERE');

	socket.onopen = () => {
		store.dispatch({
			type: NetworkActions.NETWORK_SOCK_CONNECTED,
			data: {}
		});
		store.dispatch({
			type: ChatActions.CHAT_RECV,
			data: '> Entered Channel successfully.'
		});

		send({
			type: 'plain',
			message: `> New user entered.`
		});
	};

	socket.onmessage = (e) => {
		var data = e.data;

		try {
			data = JSON.parse(e.data);
		}
		catch(err) {}

		switch(data.type) {
			case 'set-username':
				store.dispatch({
					type: UserActions.SET_USERNAME,
					data: data.id
				});
				break;
			case 'plain':
				store.dispatch({
					type: ChatActions.CHAT_RECV,
					data: data.message
				});
				break;
		}
	};

	socket.onerror = (e) => {
		console.log('Error', e);
		store.dispatch({
			type: ChatActions.CHAT_RECV,
			data: 'ERROR OCCURED!'
		});
	};

	socket.onclose = (e) => {
		store.dispatch({
			type: NetworkActions.NETWORK_SOCK_CLOSED,
			data: {}
		});
		store.dispatch({
			type: ChatActions.CHAT_RECV,
			data: 'Disconnected from channel.'
		});
	};
}

export function send(data) {
	data = typeof data === 'object' ? JSON.stringify(data) : data;
	socket.send(data);
}