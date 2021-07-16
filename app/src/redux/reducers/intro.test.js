const adminReducer = require('./admin');
const addTeacher = require('../actions/admin');

test('Teacher should be added', () => {
	let action = addTeacher({
		name: 'dsdsd',
		photo: null,
		login: 'sad123sd',
		password: 'qwertydsd',
		contacts: 'dsdds1d1sds1ds1dsd1',
		description: 'dsdsdsdsd',
	});
	let state = {
		isLoading: false,
		addedTeachers: null,
		deletedTeachers: null,
		message: '',
	};
	let newState = adminReducer(state, action);
	expect(newState.addedTeachers).toBe({
		name: 'dsdsd',
		photo: null,
		login: 'sad123sd',
		password: 'qwertydsd',
		contacts: 'dsdds1d1sds1ds1dsd1',
		description: 'dsdsdsdsd',
	});
	// expect(2 - 2).toBe(0);
});
