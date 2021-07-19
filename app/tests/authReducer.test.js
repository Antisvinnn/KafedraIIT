import authReducer from '../src/redux/reducers/auth';

let state = {
	accessToken: localStorage.getItem('accessToken') || '',
	loading: false,
	message: null,
};
let accessToken = '12r2ehds5hedtj7jgmisf93ugoefapugh3oihgieajfu9q2fpmdpfp';

test('Loading was changed', () => {
	let newState = authReducer(state, { type: 'AUTH_LOGIN_REQUEST' });
	expect(newState.loading).toBe(true);
});

test('Login implemented succesfully', () => {
	let newState = authReducer(state, { type: 'AUTH_LOGIN_SUCCESS', payload: accessToken });
	expect(newState.accessToken).toBe(accessToken);
});

test('Logout implemented succesfully', () => {
	state.accessToken = accessToken;
	let newState = authReducer(state, { type: 'AUTH_LOGOUT_SUCCESS' });
	expect(newState.accessToken).toBe(null || '');
});

test('Refresh token refreshed succesfully', () => {
	state.accessToken = accessToken + 'sdsd';
	let newState = authReducer(state, {
		type: 'AUTH_REFRESH_SUCCESS',
		payload: accessToken,
	});
	expect(newState.accessToken).toBe(accessToken);
});
