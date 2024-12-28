import axios from "axios";

const fetchAllUser = () => {
  // Trả về 1 promise
  return axios.get("https://reqres.in/api/users?page=1");
};

export { fetchAllUser };
