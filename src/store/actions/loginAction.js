import { GET_AUTH} from '../types';

export const getAuth = (name) => {
    return {
      type: GET_AUTH,
      username,
      password
    }
  }