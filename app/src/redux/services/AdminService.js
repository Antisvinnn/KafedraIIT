import axios from 'axios';

export const AddTeacher = (data) => {
	return axios.post('/stuff/create', data);
};
export const RemoveTeacher = (id) => {
	return axios.delete('/stuff', id);
};
