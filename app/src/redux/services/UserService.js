import axios from 'axios';

export const WhoAmI = () => {
	axios.get('stuff/me');
};
export const UploadTeacherPosts = (data) => {
	axios.put('/stuff/addPost', data);
};
