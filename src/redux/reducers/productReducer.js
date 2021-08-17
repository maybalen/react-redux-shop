
import React from 'react'
import { ActionTypes } from '../contants/action-types';

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}; //update the state list
        default:
            return state;  //nothing change in state array
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}; //update the state list
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}; //distory selecting or prevoious item
        default:
            return state;  //nothing change in state array
    }
}
