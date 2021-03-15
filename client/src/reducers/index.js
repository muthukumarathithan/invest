import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
import profileReducer from "./profileReducer.js";
import postReducer from "./postReducer.js";
import userReducer from './users';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  form: formReducer,
  user: userReducer
});
