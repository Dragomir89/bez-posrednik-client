import { GET_ESTATE_TYPES } from '../actions/types'

export default (state = [], action)=>{
    if(GET_ESTATE_TYPES === action.type) {
        return [...action.payload]
    }

    return state;
};
