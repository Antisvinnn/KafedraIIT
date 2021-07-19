import { message } from 'antd';
import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILED,
	AUTH_LOGOUT_REQUEST,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_FAILED,
	AUTH_REFRESH_REQUEST,
	AUTH_REFRESH_SUCCESS,
	AUTH_REFRESH_FAILED,
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
			newState.loading = true;
			return newState;
		case AUTH_LOGIN_SUCCESS:
			newState.accessToken = action.payload;
			message.success('Вход в аккаунт успешно выполнен!');
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
			message.success('Выход из аккаунта успешно выполнен!');
			newState.accessToken = '';
			return newState;
		case AUTH_LOGOUT_FAILED:
			message.error(action.payload);
			newState.loading = false;
			return newState;

		case AUTH_REFRESH_REQUEST:
			newState.loading = true;
			return newState;
		case AUTH_REFRESH_SUCCESS:
			newState.accessToken = action.payload;
			newState.loading = false;
			return newState;
		case AUTH_REFRESH_FAILED:
			message.error('Не удалось обновить токен!');
			newState.loading = false;
			return newState;

		default:
			return state;
	}
};

export default authReducer;
