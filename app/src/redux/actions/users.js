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
import axios from 'axios';

export function whoAmI() {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		try {
			axios.defaults.headers.common['Authorization'] =
				'Bearer ' + localStorage.getItem('accessToken');
			const { data } = await WhoAmI();
			dispatch({ type: WHO_AM_I_SUCCESS, payload: data });
		} catch {
			dispatch({ type: WHO_AM_I_FAILED });
		}
	};
}

export function UploadTeacherPosts(postData) {
	return async function (dispatch) {
		dispatch({ type: WHO_AM_I_REQUEST });
		try {
			const { data } = await PostTeacherPosts(postData);
			console.log(data);
			if (!data) throw new Error('Failed request!');
			dispatch({ type: POST_TEACHER_POSTS, payload: data });
		} catch {
			console.log("Post will'nt uploaded");
		}
	};
}
