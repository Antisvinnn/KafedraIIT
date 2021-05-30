import {
	WHO_AM_I_REQUEST,
	WHO_AM_I_SUCCESS,
	WHO_AM_I_FAILED,
	POST_TEACHER_POSTS,
} from '../actionsTypes/user';

const initialState = {
	profile: {},
	isProfileLoading: false,
	authData: null,
};

const userReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case WHO_AM_I_REQUEST:
			newState.isProfileLoading = true;
			return newState;
		case WHO_AM_I_SUCCESS:
			newState.isProfileLoading = false;
			newState.authData = action.payload;
			return newState;
		case WHO_AM_I_FAILED:
			newState.isProfileLoading = false;
			return newState;
		case POST_TEACHER_POSTS:
			newState.isProfileLoading = false;
			newState.profile.posts = action.payload;
			return newState;
		default:
			return state;
	}
};

export default userReducer;
