import {GET_ANIMAL} from '../types'

const initialState = {
    animals:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_ANIMAL:
        return {
            ...state,
            animals:action.payload,
            loading:false

        }
        default: return state
    }

}