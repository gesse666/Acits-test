import { GET_TODAY ,USERS_ERROR} from '../types';
import axios from 'axios';

export const getToday = () => async (dispatch) => {
  let token = localStorage.getItem('token');
  try {
    const res = await axios.get('https://acits-api.herokuapp.com/api/v1/prescriptions/today/',{
      headers :{
      'current-shelter': 1,
      Authorization: `Bearer ${token}`}
    })
    dispatch({
      type: GET_TODAY,
      payload: res.data.results
    });
    console.log(res);
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};
