import userReducer from '../src/redux/reducers/user';

let state = {
	isProfileLoading: false,
	isPostTeacherPostsLoading: false,
	authData: null,
};

test('Loading was changed', () => {
	let newState = userReducer(state, { type: 'WHO_AM_I_REQUEST' });
	expect(newState.isProfileLoading).toBe(true);
});

test('Auth information was placed to state', () => {
	let authData = { name: 'John', age: '22' };
	let newState = userReducer(state, { type: 'WHO_AM_I_SUCCESS', payload: authData });
	expect(newState.authData).toBe(authData);
});

test('Auth information was clared from state', () => {
	state.authData = { name: 'John', age: '22' };
	let newState = userReducer(state, { type: 'CLEAR_AUTH_DATA', payload: state });
	expect(newState.authData).toBe(null);
});
