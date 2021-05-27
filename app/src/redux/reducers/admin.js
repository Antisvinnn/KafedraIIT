import { message } from 'antd';
import {
	ADD_TEACHER,
	REMOVE_TEACHER,
	ADMIN_REQUEST,
	// ADMIN_REQUEST_SUCCESS,
	// ADMIN_REQUEST_FAILED,
} from '../actionsTypes/admin';

const initialState = {
	isLoading: false,
	addedTeachers: null,
	deletedTeachers: null,
	message: '',
};

const adminReducer = (state = initialState, action) => {
	let newState = { ...state };
	switch (action.type) {
		case ADMIN_REQUEST:
			newState.isLoading = true;
			return newState;
		case ADD_TEACHER:
			newState.isLoading = false;
			newState.addedTeachers = action.payload;
			return newState;
		case REMOVE_TEACHER:
			newState.isLoading = false;
			newState.deletedTeachers = action.payload;
			return newState;
		default:
			return state;
	}
};

export default adminReducer;
