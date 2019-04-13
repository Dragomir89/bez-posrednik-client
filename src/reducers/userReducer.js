import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
    token: sessionStorage.getItem('token')
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, ...action.payload }
        default: 
            return state;
    }
};