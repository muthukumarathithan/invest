import api from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_INVESTS, ADD_INVESTS } from "./types.js";


export const addInvestments = (path,data, history) => dispatch => {
  api.call('post',`investments/${path}`,data)
    .then(res => history.push(`${process.env.PUBLIC_URL}/investments`))
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
   });
};

export const loginUser = (path, data, history) =>{
  return async dispatch => {
    try {      
          const {token} = await api.call('post',`users/${path}`,data);
            localStorage.setItem("jwtToken", token);
            api.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
      
    }
    catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }}
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  api.setAuthToken(false);

  dispatch(setCurrentUser({}));
};