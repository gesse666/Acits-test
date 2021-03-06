import { GET_CURRENT_ANIMAL,USERS_ERROR } from "../types";
import axios from 'axios';

export const getCurrentAnimal = (idAnimal) => async dispatch => {
  let token = localStorage.getItem('token');
  try {
    const res = await axios.get(`https://acits-api.herokuapp.com/api/v1/animals/${idAnimal}`,{
      headers :{
      'current-shelter': 1,
      Authorization: `Bearer ${token}`}
    })
    dispatch({
      type: GET_CURRENT_ANIMAL,
      payload: res.data,
      isOpen:true
    });
    console.log(res.data);
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};