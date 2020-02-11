import * as types from './actionTypes'
import {fetchFromEndpoint} from '../utils/fetch-helper'
import 'whatwg-fetch'


function loadProductsRequest() {
  return {
    type: types.LOAD_PRODUCTS_REQUEST
  }
}

export function loadProductsSuccess(data) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, payload: data}
}

function loadProductsFailure() {
  return {
    type: types.LOAD_PRODUCTS_FAILURE
  }
}
export function loadProducts() {
  const payload = fetchFromEndpoint('getAllProducts').then(response => response.json())
  return dispatch => {
    dispatch(loadProductsRequest())
    return payload.then(data => {
      dispatch(loadProductsSuccess(data))
    }).catch(error => {
      return dispatch(loadProductsFailure())
    })
  }
}
