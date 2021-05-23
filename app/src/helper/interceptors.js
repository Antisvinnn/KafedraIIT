import axios from 'axios';
import { refresh } from '../redux/actions/auth';

const Interceptors = (dispatch) => {
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				dispatch(refresh);
			}
		}
	);
};

export default Interceptors;
