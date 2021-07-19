import authReducer from '../src/redux/reducers/auth';

let state = {
	accessToken: localStorage.getItem('accessToken') || '',
	loading: false,
	message: null,
};

test('Loading was changed', () => {
	let newState = authReducer(state, { type: 'AUTH_LOGIN_REQUEST' });
	expect(newState.loading).toBe(true);
});
