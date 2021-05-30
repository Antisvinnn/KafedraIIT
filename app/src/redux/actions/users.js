import {
	WhoAmI,
	UploadTeacherPosts as PostTeacherPosts,
} from '@redux/services/UserService';
import {
	WHO_AM_I_REQUEST,
	WHO_AM_I_SUCCESS,
	WHO_AM_I_FAILED,
	POST_TEACHER_POSTS,
} from '@redux/actionsTypes/user';
import { logout } from './auth';

// export function whoAmI() {
// 	return async function (dispatch) {
// 		dispatch({ type: WHO_AM_I_REQUEST });
// 		WhoAmI()
// 			.then((data) => {
// 				dispatch({ type: WHO_AM_I_SUCCESS, payload: data.data });
// 				return Promise.resolve();
// 			})
// 			.catch((err) => {
// 				dispatch({ type: WHO_AM_I_FAILED });
// 				dispatch(logout());
// 				return Promise.reject(err.response);
// 			});
// 	};
// }

export function whoAmI() {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		const response = await WhoAmI();
		const message = response.data;
		try {
			dispatch({ type: WHO_AM_I_SUCCESS, payload: message });
			console.log('Try block reacted');
		} catch {
			dispatch({ type: WHO_AM_I_FAILED });
			console.log('Catch block reacted');
			dispatch(logout());
		}
	};
}

export const UploadTeacherPosts = (data) => {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		const response = await PostTeacherPosts(data);
		const message = response.data;
		try {
			message ?? new Error('Failed request!');
			dispatch({ type: POST_TEACHER_POSTS, payload: message });
		} catch {
			console.log("Post will'nt uploaded");
		}
	};
};
