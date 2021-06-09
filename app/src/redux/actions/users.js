import {
  WhoAmI,
  UploadTeacherPosts as PostTeacherPosts,
} from "@redux/services/UserService";
import {
  WHO_AM_I_REQUEST,
  WHO_AM_I_SUCCESS,
  WHO_AM_I_FAILED,
  POST_TEACHER_POSTS_REQUEST,
  POST_TEACHER_POSTS_SUCCESS,
  POST_TEACHER_POSTS_FAILED,
} from "@redux/actionsTypes/user";
import axios from "axios";

export function whoAmI() {
  return async function (dispatch) {
    dispatch({ type: WHO_AM_I_REQUEST });
    try {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
      const { data } = await WhoAmI();
      dispatch({ type: WHO_AM_I_SUCCESS, payload: data });
    } catch {
      dispatch({ type: WHO_AM_I_FAILED });
    }
  };
}

export function UploadTeacherPosts(postData) {
  return async function (dispatch) {
    dispatch({ type: WHO_AM_I_REQUEST });
    console.log("This is before try/catch");
    try {
      console.log("This is try!");
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
      await PostTeacherPosts(postData);
      dispatch({ type: POST_TEACHER_POSTS_SUCCESS });
    } catch {
      console.log("This is catch!");
      dispatch({ type: POST_TEACHER_POSTS_FAILED });
    }
  };
}
