import axios from "axios";

type ApiType = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  payload?: any;
};

export const api = ({ endpoint, method, payload }: ApiType) => {
  return axios({
    baseURL: "http://localhost:8080",
    method,
    url: `http://localhost:8080${endpoint}`,
    data: payload
  });
}