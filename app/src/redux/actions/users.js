import { WhoAmI } from '@redux/services/UserService';
import {
	WHO_AM_I_REQUEST,
	WHO_AM_I_SUCCESS,
	WHO_AM_I_FAILED,
} from '@redux/actionsTypes/user';
import { logout } from './auth';

export function whoAmI() {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		WhoAmI()
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
