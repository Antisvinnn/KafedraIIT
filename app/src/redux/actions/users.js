import UsersService from '../../services/UsersService';
import {
	WHO_AM_I_REQUEST,
	WHO_AM_I_SUCCESS,
	WHO_AM_I_FAILED,
} from '../actionsTypes/users';
import { logout } from './auth';

export function whoAmI() {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		UsersService.whoAmI()
			.then((data) => {
				dispatch({ type: WHO_AM_I_SUCCESS, payload: data.data });
				return Promise.resolve();
			})
			.catch((err) => {
				dispatch({ type: WHO_AM_I_FAILED });
				dispatch(logout());
				return Promise.reject(err.response);
			});
	};
}
