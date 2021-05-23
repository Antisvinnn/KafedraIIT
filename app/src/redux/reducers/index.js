import { combineReducers } from 'redux';
import userReducer from './user';
import publickReducer from './publick';
import authReducer from '../reducers/auth';

const appReducer = combineReducers({
	user: userReducer,
	publick: publickReducer,
	auth: authReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
