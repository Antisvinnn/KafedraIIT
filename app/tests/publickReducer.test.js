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
