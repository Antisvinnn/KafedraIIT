import {
	ADD_TEACHER,
	REMOVE_TEACHER,
	ADMIN_REQUEST,
	ADMIN_REQUEST_FAILED,
} from '@redux/actionsTypes/admin';
import { AddTeacher, RemoveTeacher } from '@redux/services/AdminService';

export function addTeacher(data) {
	return async function (dispatch) {
		dispatch({ type: ADMIN_REQUEST });
		const response = await AddTeacher(data);
		console.log(response);
		try {
			response
				? dispatch({ type: ADD_TEACHER, payload: response })
				: console.log('Ответ пустой');
		} catch {
			dispatch({ type: ADMIN_REQUEST_FAILED });
			console.log('Блок catch среагировал');
		}
	};
}
