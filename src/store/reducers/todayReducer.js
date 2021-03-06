import {GET_TODAY} from '../types'

const initialState = {
    today:[],
    loading:true
}

export default function( state=initialState,action){

    switch(action.type){

        case GET_TODAY:
        return {
            ...state,
            today:action.payload,
            loading:false

        }
        default: return state
    }

}