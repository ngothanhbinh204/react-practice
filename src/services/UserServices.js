import axios from "./customizeAxios";

const fetchAllUser = (page) => {
  // Trả về 1 promise
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name: name, job: job });
};

export { fetchAllUser, postCreateUser };
