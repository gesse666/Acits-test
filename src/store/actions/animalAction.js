import { GET_ANIMAL ,USERS_ERROR} from '../types';
import axios from 'axios';


export const getAnimal = () => async (dispatch) => {
  let token = localStorage.getItem('token');
  try {
    const res = await axios.get('https://acits-api.herokuapp.com/api/v1/animals/',{
      headers :{
      'current-shelter': 1,
      Authorization: `Bearer ${token}`}
    })
    dispatch({
      type: GET_ANIMAL,
      payload: res.data.results
    });
    console.log(res.data.results);
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};
