import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';

const appReducer = combineReducers({
	auth: authReducer,
	users: usersReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
