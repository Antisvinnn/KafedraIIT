import axios from './axios';
import AuthService from '@redux/services/AuthService';

const api = async (url, method = 'GET', data) => {
	var time = parseInt(new Date().getTime() / 1000);
	if (time + 100 > localStorage.getItem('expires_in')) {
		await AuthService.refresh(localStorage.getItem('refreshToken'))
			.then((resp) => {
				localStorage.setItem('accessToken', resp.data.accessToken);
				localStorage.setItem('refreshToken', resp.data.refreshToken);
				localStorage.setItem('expires_in', resp.data.expires_in);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	let config = {
		headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
	};

	switch (method) {
		case 'GET':
			return axios.get(url, config);
		case 'POST':
			return axios.post(url, data, config);
		case 'PUT':
			return axios.put(url, data, config);
		case 'DELETE':
			return axios.delete(url, config);
		case 'PATCH':
			return axios.patch(url, data, config);
		case 'OPTIONS':
			return axios.options(url, config);
		default:
			return axios.get(url, config);
	}
};
export default api;
