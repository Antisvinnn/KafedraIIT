import axios from "axios";
import { refresh, logout } from "@redux/actions/auth";

export const Interceptors = (dispatch) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        dispatch(refresh());
      } else if (error.response?.status !== 405) {
        dispatch(logout());
      }
    }
  );
};
