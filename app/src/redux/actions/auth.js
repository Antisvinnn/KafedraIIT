import { login as Login, logout as Logout } from '@redux/services/AuthService';
import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILED,
	AUTH_LOGOUT_REQUEST,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_FAILED,
} from '@redux/actionsTypes/user';
import { whoAmI } from './users';

export const login = (data) => {
	return async function (dispatch) {
		dispatch({ type: AUTH_LOGIN_REQUEST });
		try {
			const response = Login(data);
			dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data.accessToken });
			localStorage.setItem('accessToken', response.data.accessToken);
			localStorage.setItem('refreshToken', response.data.refreshToken);
			localStorage.setItem('expires_in', response.data.expires_in);
			dispatch(whoAmI());
		} catch (err) {
			let message;
			if (err.response?.data === 'Password is incorrect') message = 'Неверный пароль';
			else message = 'Что-то пошло не так';
			dispatch({ type: AUTH_LOGIN_FAILED, payload: message });
			return Promise.reject(message);
		}
	};
};

export const logout = () => {
	return async function (dispatch) {
		dispatch({ type: AUTH_LOGOUT_REQUEST });
		Logout(localStorage.getItem('refreshToken'));
		try {
			dispatch({ type: AUTH_LOGOUT_SUCCESS });
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('expires_in');
			return Promise.resolve();
		} catch (err) {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('expires_in');
			dispatch({ type: AUTH_LOGOUT_FAILED, payload: 'Что-то пошло не так' });
			return Promise.reject('Что-то пошло не так');
		}
	};
};
