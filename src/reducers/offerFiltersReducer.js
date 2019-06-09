import { GET_ESTATE_FILTERS, CLEAR_FILTERS } from '../actions/types'
export default (state = [], action)=>{
    if(GET_ESTATE_FILTERS === action.type){
        return [...action.payload]
    } else if (CLEAR_FILTERS === action.type) {
        return [];
    }

    return state;
};