import streams from '../apis/local';
import history from '../history';

import { 
    LOGIN,
    REGISTER,
    ADD_OFFER_PROP,
    GET_CITIES,
    GET_NEIFHBORGOODS_FOR_CITY,
    GET_ESTATE_FILTERS,
    GET_ESTATE_TYPES,
    GET_OFFER_TYPES,
    CLEAR_FILTERS,
    GET_ESTATES
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

export const addOfferProp = offerProp => async (dispatch) => {
    const response = await streams.post('/add-offer-property', offerProp);
    dispatch({ type: ADD_OFFER_PROP, payload: response.data });
};
///////////////////
export const getCities = () => async (dispatch) => {
    const response = await streams.get('/get-offer-prop/city');
    dispatch({type: GET_CITIES, payload: response.data});
};

export const getEstateTypes = () => async (dispatch) => {
    const responce = await streams.get('/get-offer-prop/estateType');
    dispatch({type: GET_ESTATE_TYPES, payload: responce.data})

};

export const getOfferTypes = () => async (dispatch) => {
    const responce = await streams.get('/get-offer-prop/offerType');
    dispatch({type: GET_OFFER_TYPES, payload: responce.data})
};
//GET_FILTERS_FOR_ESTATE
export const getFiltersForEstate = (estateTypeId) => async (dispatch) =>{
    const url = `/get-offer-prop/estate-filters?estateTypeId=${estateTypeId}`
    const responce = await streams.get(url)
    dispatch({type: GET_ESTATE_FILTERS, payload: responce.data})
}

export const clearFilters = () => (dispatch) => {
    dispatch({type: CLEAR_FILTERS});
}
//////////////////

export const getEstateFilters = () => async (dispatch) => {
    const responce = await streams.get('/get-all-estate-filters');
    dispatch({type: GET_ESTATE_FILTERS, payload: responce.data});
};


export const getNeighborhoodsForCity = (cityId, cities) => (dispatch) => {
    /////// USE ARRAY.FIND
    for (let i = 0; i < cities.length; i++) { 
        if(cities[i]._id === cityId) {
            dispatch({type: GET_NEIFHBORGOODS_FOR_CITY, payload: cities[i].neighborhoods})
            return;
        }
    }
   return dispatch({type: GET_NEIFHBORGOODS_FOR_CITY, payload: ['laina']})  
}

export const addPicture = (data) => async (dispatch) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const formData = new FormData();
    console.log(data)
    for (var key in data) {
        if (data.hasOwnProperty(key) && key !== 'file') {           
            formData.set(key, data[key]);        
        }
    }
    formData.append('file',data.file);
    const responce = await streams.post('/add-estate-picture', formData, config);
    console.log(responce.data);
}

export const getEstates = (data) => async (dispatch) => {
    let filters = {};
    for (let prop in data) {
        if(data[prop] && data[prop] !== -1) {
            filters[prop] = data[prop];
        }
    }
    const responce = await streams.post('/get-estates', filters);
    const action = {type: GET_ESTATES, payload: responce.data}
    dispatch(action);
}