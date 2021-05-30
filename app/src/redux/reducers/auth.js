import { message } from 'antd';
import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILED,
	AUTH_LOGOUT_REQUEST,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_FAILED,
} from '../actionsTypes/auth';

const initialState = {
	accessToken: localStorage.getItem('accessToken') || '',
	loading: false,
	message: null,
};

const authReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case AUTH_LOGIN_REQUEST:
			newState.message = '';
			newState.loading = true;
			return newState;
		case AUTH_LOGIN_SUCCESS:
			newState.accessToken = action.payload;
			newState.loading = false;
			return newState;
		case AUTH_LOGIN_FAILED:
			message.error(action.payload);
			newState.message = action.payload;
			newState.loading = false;
			return newState;
		case AUTH_LOGOUT_REQUEST:
			newState.loading = true;
			return newState;
		case AUTH_LOGOUT_SUCCESS:
			newState.loading = false;
			newState.accessToken = '';
			return newState;
		case AUTH_LOGOUT_FAILED:
			message.error(action.payload);
			newState.loading = false;
			return newState;
		default:
			return state;
	}
};

export default authReducer;
