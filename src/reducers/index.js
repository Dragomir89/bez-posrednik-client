import { combineReducers } from 'redux';
import userReducer from './userReducer'
import citiesReducer from './citiesReducer'
import neighborhoodsForCityReducer from './neighborhoodsForCityReducer'
import offerFiltersReducer from './offerFiltersReducer'
import estateTypesReducer from './estateTypesReducer'
import offerTypesReducer from './offerTypesReducer.js'

export default combineReducers({
    user: userReducer,
    cities: citiesReducer,
    neighborhoodsForCity: neighborhoodsForCityReducer,
    filters: offerFiltersReducer,
    estateTypes: estateTypesReducer,
    offerTypes: offerTypesReducer
});