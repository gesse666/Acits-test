import { combineReducers } from "redux";
import authReducer from "./authReducer";
import todayReducer from "./todayReducer";
import animalReducer from "./animalReducer";
import { modelReducer, formReducer } from 'react-redux-form';
import modalReducer from "./modalReducer";

export default combineReducers({
  token: authReducer,
  isAuth:authReducer,
  today: todayReducer,
  animals: animalReducer,
  user: modelReducer('user'),
  userForm: formReducer('user'),
  animalmodal:modalReducer,
});
