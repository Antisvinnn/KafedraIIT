import axios from "axios";
import { refresh, logout } from "@redux/actions/auth";

export const Interceptors = (dispatch) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response?.status === 401) {
        dispatch(refresh());
      } else {
        dispatch(logout());
      }
    }
  );
};
