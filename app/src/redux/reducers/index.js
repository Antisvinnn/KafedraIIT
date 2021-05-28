import { combineReducers } from 'redux';
import userReducer from './user';
import publickReducer from './publick';
import authReducer from '../reducers/auth';
import adminReducer from './admin';

const appReducer = combineReducers({
	user: userReducer,
	publick: publickReducer,
	auth: authReducer,
	admin: adminReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
