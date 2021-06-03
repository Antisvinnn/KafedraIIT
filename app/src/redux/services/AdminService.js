import axios from 'axios';

export const AddTeacher = (data) => {
	return axios.post('/admin/create', data);
};
export const RemoveTeacher = (id) => {
	return axios.delete(`/admin/${id}`);
};
