import { GET_TOKEN } from "../types";

const initialState = {
  token: '',
  loading: true,
  isAuth:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token:localStorage.setItem("token", action.payload),
        loading: false,
        isAuth:true
      };
    default:
      return state;
  }
}
