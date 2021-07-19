import {
	ADD_TEACHER,
	REMOVE_TEACHER,
	ADMIN_REQUEST,
	ADMIN_REQUEST_FAILED,
} from '../actionsTypes/admin';
import { AddTeacher, RemoveTeacher } from '../services/AdminService';

export function addTeacher(data) {
	return async function (dispatch) {
		dispatch({ type: ADMIN_REQUEST });
		const response = await AddTeacher(data);
		const teacherData = response?.data;
		try {
			response
				? dispatch({ type: ADD_TEACHER, payload: teacherData })
				: console.log('Ответ пустой');
		} catch {
			dispatch({ type: ADMIN_REQUEST_FAILED });
			console.log('Блок catch среагировал');
		}
	};
}

export function removeTeacher(id) {
	return async function (dispatch) {
		dispatch({ type: ADMIN_REQUEST });
		const response = RemoveTeacher(id);
		try {
			response
				? dispatch({ type: REMOVE_TEACHER, payload: id })
				: console.log('Answer is clean');
		} catch {
			dispatch({ type: ADMIN_REQUEST_FAILED });
		}
	};
}
