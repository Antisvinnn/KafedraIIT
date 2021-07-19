import adminReducer from '../src/redux/reducers/admin';

let state = {
	isLoading: false,
	addedTeachers: null,
	deletedTeachers: null,
	message: '',
};

test('Teacher should be added', () => {
	let sendData = {
		name: 'dsdsd',
		photo: null,
		login: 'sad123sd',
		password: 'qwertydsd',
		contacts: 'dsdds1d1sds1ds1dsd1',
		description: 'dsdsdsdsd',
	};
	let newState = adminReducer(state, { type: 'ADD_TEACHER', payload: sendData });
	expect(newState.addedTeachers).toStrictEqual({ ...sendData });
});

test('Loading was changed', () => {
	let newState = adminReducer(state, { type: 'ADMIN_REQUEST' });
	expect(newState.isLoading).toBe(true);
});

test('Teacher should be removed', () => {
	let teacherID = 15;
	let newState = adminReducer(state, { type: 'REMOVE_TEACHER', payload: teacherID });
	expect(newState.deletedTeachers).toBe(teacherID);
});
