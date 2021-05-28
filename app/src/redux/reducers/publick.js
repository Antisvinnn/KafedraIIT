import {
	PUBLICK_REQUEST,
	PUBLICK_FAILED,
	GET_ALL_STUFF,
	GET_ONLY_TEACHER,
	GET_ONLY_TEACHER_POSTS,
} from '../actionsTypes/publick';

const initialState = {
	stuff: [],
	onlyTeacher: {},
	onlyTeacherPosts: [],
	isDataLoading: false,
	message: null,
};

const publickReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case PUBLICK_REQUEST:
			newState.isDataLoading = true;
			return newState;
		case PUBLICK_FAILED:
			newState.isDataLoading = false;
			newState.message = action.payload;
			return newState;
		case GET_ALL_STUFF:
			newState.isDataLoading = false;
			newState.stuff = action.payload;
			return newState;
		case GET_ONLY_TEACHER:
			newState.isDataLoading = false;
			newState.onlyTeacher = action.payload;
			return newState;
		case GET_ONLY_TEACHER_POSTS:
			newState.isDataLoading = false;
			newState.onlyTeacherPosts = action.payload;
			return newState;
		default:
			return state;
	}
};

export default publickReducer;
