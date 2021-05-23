import { combineReducers } from 'redux';
import userReducer from './user';
import publickReducer from './publick';

const appReducer = combineReducers({
	user: userReducer,
	publick: publickReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
