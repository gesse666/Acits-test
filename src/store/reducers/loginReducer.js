import {GET_AUTH} from '../types'

const initialState = {
    username:'',
    password:''
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_AUTH:
        return {
            ...state,
            username:action.payload,
            password:action.payload,

        }
        default: return state
    }

}