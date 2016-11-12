import * as NetworkActions from '../actions/Network';

const defaultState = {
	connected: false
};

export default function(state = defaultState, action = {}) {
	switch(action.type) {
		case NetworkActions.NETWORK_SOCK_CONNECTED:
			return Object.assign({}, {
				connected: true
			});
		case NetworkActions.NETWORK_SOCK_CLOSED:
			return Object.assign({}, {
				connected: true
			});
		default:
			return state;
	}
}