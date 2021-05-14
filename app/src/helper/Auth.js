import axios from './Axios';

const auth = (url, method = 'GET', data) => {
	switch (method) {
		case 'GET':
			return axios.get('/auth' + url);
		case 'POST':
			return axios.post('/auth' + url, data);
		default:
			return axios.get('/auth' + url);
	}
};

export default auth;
