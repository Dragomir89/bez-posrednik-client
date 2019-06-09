import { GET_CITIES } from '../actions/types'

export default function (state = [], action) {

    if(action.type === GET_CITIES) {
        return [...action.payload];
    }
    return state;
};