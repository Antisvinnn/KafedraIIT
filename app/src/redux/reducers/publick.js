import {
	GET_ALL_STUFF,
	GET_ONLY_TEACHER,
	GET_ONLY_TEACHER_POSTS,
} from '../actionsTypes/publick';

const initialState = {
	stuff: [],
	onlyTeacher: {},
	onlyTeacherPosts: [],
	isDataLoading: true,
	message: null,
};

const publickReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case GET_ALL_STUFF:
			newState.isProfileLoading = false;
			newState.stuff = action.payload;
			return newState;
		case GET_ONLY_TEACHER:
			newState.isProfileLoading = false;
			newState.onlyTeacher = action.payload;
			return newState;
		case GET_ONLY_TEACHER_POSTS:
			newState.isProfileLoading = false;
			newState.onlyTeacherPosts = action.payload;
			return newState;
		default:
			return state;
	}
};

export default publickReducer;
