import { GET_NEIFHBORGOODS_FOR_CITY } from '../actions/types'

export default (state = [], action) => {
    if(action.type === GET_NEIFHBORGOODS_FOR_CITY) {
        return [...action.payload];
    }

    return state;
}
