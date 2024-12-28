import axios from "./customizeAxios";

const fetchAllUser = (page) => {
  // Trả về 1 promise
  return axios.get(`/api/users?page=${page}`);
};

export { fetchAllUser };
