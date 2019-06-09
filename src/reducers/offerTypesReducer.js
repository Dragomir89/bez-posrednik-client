import { GET_OFFER_TYPES } from '../actions/types';

export default (state=[], action)=>{
    if(action.type === GET_OFFER_TYPES){
        return [...action.payload]
    }
    return state;
};