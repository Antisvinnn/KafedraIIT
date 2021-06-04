import {
  login as Login,
  logout as Logout,
  refresh as Refresh,
} from "@redux/services/AuthService";
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_REFRESH_REQUEST,
  AUTH_REFRESH_SUCCESS,
  AUTH_REFRESH_FAILED,
} from "@redux/actionsTypes/auth";
import { whoAmI } from "./users";
import axios from "axios";

export const login = (data) => {
  return async function (dispatch) {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    try {
      const { data: jwt } = await Login(data);
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: jwt.accessToken,
      });
      localStorage.setItem("accessToken", jwt.accessToken);
      localStorage.setItem("refreshToken", jwt.refreshToken);
      localStorage.setItem("expires_in", jwt.expires_in);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + jwt.accessToken;
      dispatch(whoAmI());
    } catch (err) {
      let message;
      if (err.response?.data === "Password is incorrect")
        message = "Неверный пароль";
      else message = "Что-то пошло не так";
      dispatch({ type: AUTH_LOGIN_FAILED, payload: message });
      return Promise.reject(message);
    }
  };
};

export const logout = () => {
  return async function (dispatch) {
    dispatch({ type: AUTH_LOGOUT_REQUEST });
    try {
      await Logout(localStorage.getItem("refreshToken"));
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expires_in");
      axios.defaults.headers.common["Authorization"] = "";
      dispatch({ type: AUTH_LOGOUT_SUCCESS });
      return Promise.resolve();
    } catch (err) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expires_in");
      dispatch({ type: AUTH_LOGOUT_FAILED, payload: "Что-то пошло не так" });
      return Promise.reject("Что-то пошло не так");
    }
  };
};

export const refresh = () => {
  return async function (dispatch) {
    dispatch({ type: AUTH_REFRESH_REQUEST });
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const { data } = await Refresh(refreshToken);
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("expires_in", data.expires_in);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + data.accessToken;
      dispatch({ type: AUTH_REFRESH_SUCCESS, payload: data.accessToken });
      return Promise.resolve();
    } catch {
      dispatch({ type: AUTH_REFRESH_FAILED });
    }
  };
};
