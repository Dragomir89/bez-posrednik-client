import { GET_ESTATES } from '../actions/types';

export default (state = [], action) => {

    if(action.type === GET_ESTATES) {
        return [...action.payload]
    }
    return state;
};