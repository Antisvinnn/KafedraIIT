import publickReducer from '../src/redux/reducers/publick';

let state = {
	stuff: [],
	onlyTeacher: {},
	onlyTeacherPosts: [],
	isDataLoading: true,
	message: null,
};

test('Loading was changed', () => {
	let newState = publickReducer(state, { type: 'PUBLICK_REQUEST' });
	expect(newState.isDataLoading).toBe(true);
});

test('Stuff was placed to state', () => {
	state.stuff = ['First teacher', 'Second teacher', 'Third teacher'];
	let newState = publickReducer(state, { type: 'GET_ALL_STUFF', payload: state.stuff });
	expect(newState.stuff).toBe(state.stuff);
});

test('Something teacher was placed to state', () => {
	state.onlyTeacher = { name: 'Vit', contacts: '123', photo: null };
	let newState = publickReducer(state, {
		type: 'GET_ALL_STUFF',
		payload: state.onlyTeacher,
	});
	expect(newState.onlyTeacher).toBe(state.onlyTeacher);
});

test('Something teachers posts was placed to state', () => {
	state.onlyTeacherPosts = [
		'something post',
		'something post',
		'something post',
		'something post',
	];
	let newState = publickReducer(state, {
		type: 'GET_ONLY_TEACHER_POSTS',
		payload: state.onlyTeacherPosts,
	});
	expect(newState.onlyTeacherPosts).toBe(state.onlyTeacherPosts);
});
