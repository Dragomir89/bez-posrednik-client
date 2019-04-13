import streams from '../apis/local';
import history from '../history';

import { 
    LOGIN,
    REGISTER
} from './types';




export const login = userValues => async (dispatch) => {
    const response = await streams.post('/login', userValues);
    sessionStorage.setItem('token', response.data.token);
    dispatch({ type: LOGIN, payload: response.data });
    history.push('/');
};

export const getUser = () => async (dispatch) => {
    const response = await streams.get('/get-user');
    dispatch({ type: LOGIN, payload: response.data });
}

export const register = userValues => async (dispatch) => {
    const response = await streams.post('/register', userValues);
    dispatch({ type: REGISTER, payload: response.data });
    history.push('/users/login');
};


