import axios from "axios";
import { Interceptors } from "./interceptors";

export const Init = (dispatch) => {
  process.env.NODE_ENV === "development"
    ? (axios.defaults.baseURL = "http://localhost:33433")
    : (axios.defaults.baseURL = "http://localhost:33433");
  Interceptors(dispatch);
};
