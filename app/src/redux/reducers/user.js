import { message } from "antd";
import {
  WHO_AM_I_REQUEST,
  WHO_AM_I_SUCCESS,
  WHO_AM_I_FAILED,
  CLEAR_AUTH_DATA,
  POST_TEACHER_POSTS_REQUEST,
  POST_TEACHER_POSTS_SUCCESS,
  POST_TEACHER_POSTS_FAILED,
} from "../actionsTypes/user";

const initialState = {
  profile: {},
  isProfileLoading: false,
  isPostTeacherPostsLoading: false,
  authData: null,
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case WHO_AM_I_REQUEST:
      newState.isProfileLoading = true;
      return newState;
    case WHO_AM_I_SUCCESS:
      newState.isProfileLoading = false;
      newState.authData = action.payload;
      return newState;
    case WHO_AM_I_FAILED:
      newState.isProfileLoading = false;
      return newState;
    case CLEAR_AUTH_DATA:
      newState.isProfileLoading = false;
      message.info("authData was cleared!");
      newState.authData = null;
      return newState;
    case POST_TEACHER_POSTS_REQUEST:
      newState.isPostTeacherPostsLoading = true;
      return newState;
    case POST_TEACHER_POSTS_SUCCESS:
      newState.isPostTeacherPostsLoading = false;
      message.success("Запись опубликована");
      return newState;
    case POST_TEACHER_POSTS_FAILED:
      newState.isPostTeacherPostsLoading = false;
      message.error("Запись не будет опубликована!");
      return newState;
    default:
      return state;
  }
};

export default userReducer;
