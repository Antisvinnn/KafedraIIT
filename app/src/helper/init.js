import axios from 'axios';

export const Init = () => {
	process.env.NODE_ENV === 'development'
		? (axios.defaults.baseURL = 'http://localhost:33433')
		: (axios.defaults.baseURL = 'http://localhost:33433');
};
