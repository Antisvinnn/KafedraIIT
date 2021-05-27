import axios from "axios";

export const WhoAmI = () => axios.get("/users/me");
export const UploadTeacherPosts = (data) => {
  axios.put("/stuff/addPost", data);
};
