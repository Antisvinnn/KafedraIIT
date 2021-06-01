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
import axios from 'axios';

export function whoAmI() {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		axios.defaults.headers.common['Authorization'] =
			'Bearer ' + localStorage.getItem('accessToken');
		const response = await WhoAmI();
		const authData = response.data;
		try {
			console.log('This is try');
			authData
				? dispatch({ type: WHO_AM_I_SUCCESS, payload: authData })
				: console.log('Try block reacted but - Failed request');
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
