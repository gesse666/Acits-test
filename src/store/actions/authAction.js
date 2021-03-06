import { GET_TOKEN ,USERS_ERROR} from "../types";
import axios from "axios";

export const getToken = (val) => async (dispatch) => {
  try {
    const res = await axios.post("https://acits-api.herokuapp.com/api/token/", val) 
    dispatch({
      type: GET_TOKEN,
      payload: res.data.access
    });
    localStorage.setItem("token", res.data.access);
    console.log(res.data.access);
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: alert('Имя пользователя или пароль введены не верно')
    });
  }
};
