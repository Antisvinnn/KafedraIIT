import axios from 'axios';

export const GetAllStuff = () => {
	return axios.get('/stuff/getAll');
};
export const GetOnlyTeacher = (id) => {
	return axios.get(`/stuff/${id}`);
};
export const GetOnlyTeacherPosts = (id) => {
	return axios.get(`/stuff/posts/${id}`);
};
