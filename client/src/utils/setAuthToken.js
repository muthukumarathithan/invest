import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

const call = async (method, path, data) =>{

  const response = await axios[method](`http://localhost:8080/api/${path}`, data);
  return response.data;
 }

export default {call,setAuthToken,};