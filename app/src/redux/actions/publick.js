import {
	GetAllStuff,
	GetOnlyTeacher,
	GetOnlyTeacherPosts,
} from '../services/PublickService';

import {
	GET_ALL_STUFF,
	GET_ONLY_TEACHER,
	GET_ONLY_TEACHER_POSTS,
	PUBLICK_REQUEST,
	PUBLICK_FAILED,
} from '../reducers/publick';

import { message } from 'antd';

export function getAllStuff() {
	return async function (dispatch) {
		dispatch({ type: PUBLICK_REQUEST });
		const response = await GetAllStuff(); //прилетает массив
		const STUFF = response?.data;
		try {
			STUFF ?? new Error('Failed request.');
			dispatch({ type: GET_ALL_STUFF, payload: STUFF });
		} catch (err) {
			dispatch({ type: PUBLICK_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getOnlyTeacher(data) {
	return async function (dispatch) {
		dispatch({ type: PUBLICK_REQUEST });
		const response = await GetOnlyTeacher(data);
		const TEACHER = response?.data;
		try {
			TEACHER ?? new Error('Failed request.');
			dispatch({ type: GET_ONLY_TEACHER, payload: TEACHER });
		} catch (err) {
			dispatch({ type: PUBLICK_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getOnlyTeacherPosts(data) {
	return async function (dispatch) {
		dispatch({ type: PUBLICK_REQUEST });
		const response = await GetOnlyTeacherPosts(data);
		const POSTS = response?.data;
		try {
			POSTS ?? new Error('Failed request.');
			dispatch({ type: GET_ONLY_TEACHER_POSTS, payload: POSTS });
		} catch (err) {
			dispatch({ type: PUBLICK_FAILED, payload: err });
			message.error(err);
		}
	};
}