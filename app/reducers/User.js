import { SET_USERNAME } from '../actions/User';

const defaultState = {
	username: ''
};

export default function(state = defaultState, action = {}) {
	switch(action.type) {
		case SET_USERNAME:
			return Object.assign({}, {
				username: action.data
			});
		default:
			return state;
	}
}