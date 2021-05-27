import axios from "axios";

export const login = (data) => {
  return axios.post("/auth/login", data);
};
export const logout = (token) => {
  return axios.post("/auth/logout", { token: token });
};
export const refresh = (token) => {
  return axios.post("/auth/refresh", { token: token });
};
