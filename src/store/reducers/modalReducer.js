import {GET_CURRENT_ANIMAL,CLOSE_ACTION} from '../types'

const initialState = {
  animal:{},
  isOpen:false
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_CURRENT_ANIMAL:
        return {
          ...state,
          animal:action.payload,
          isOpen:true
        }
        case CLOSE_ACTION:
          return {
            ...state,
            isOpen:false
          }
        default: return state
    }

}