import axios from 'axios';

export const Interceptors = (dispatch) => {
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			console.log(error.toString());
		}
	);
};
