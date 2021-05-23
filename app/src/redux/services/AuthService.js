import axios from 'axios';

export const login = (data) => {
	return axios.post('/login', data);
};
export const logout = (token) => {
	return axios.post('/logout', { token: token });
};
export const refresh = (token) => {
	return axios.post('/refresh', { token: token });
};
