import * as types from './actionTypes'
import {fetchFromEndpoint} from '../utils/fetch-helper'
import 'whatwg-fetch'


function loadCartItemsRequest() {
  return {
    type: types.LOAD_CART_ITEMS_REQUEST
  }
}

export function loadCartItemsSuccess(data) {
  return { type: types.LOAD_CART_ITEMS_SUCCESS, payload: data}
}

function loadCartItemsFailure(error) {
  return {
    type: types.LOAD_CART_ITEMS_FAILURE,
    payload: error
  }
}

export function loadCartItems(userId) {
  const payload = fetchFromEndpoint('getCartByUser', {userId}).then(response => response.json())
  return function(dispatch) {
    dispatch(loadCartItemsRequest())
    return payload.then(data => {
      dispatch(loadCartItemsSuccess(data))
    }).catch(error => {
      return dispatch(loadCartItemsFailure(error))
    })
  }
}

function addCartItemRequest() {
  return {
    type: types.ADD_CART_ITEM_REQUEST
  }
}

function addCartItemSuccess(data) {
  return { type: types.ADD_CART_ITEM_SUCCESS, payload: data}
}

export function addCartItemFailure(error) {
  return {
    type: types.ADD_CART_ITEM_FAILURE,
    payload: error
  }
}

export function addCartItem(userId, product, quantity) {
  const params = { userId, product: product.id, quantity }
  const payload = fetchFromEndpoint('addToCart', params).then(response => response.json())
  return function (dispatch) {
    dispatch(addCartItemRequest());
    return payload.then(data => {
      dispatch(addCartItemSuccess(data[0].cart)); //wow fix this
    }).catch(error => {
      return dispatch(addCartItemFailure(error));
    })
  }
}

function setQuantityForItemRequest() {
  return {
    type: types.SET_QUANTITY_FOR_ITEM_REQUEST
  }
}

export function setQuantityForItemSuccess(data) {
  return { type: types.SET_QUANTITY_FOR_ITEM_SUCCESS, payload: data}
}

export function setQuantityForItemFailure(error) {
  return {
    type: types.SET_QUANTITY_FOR_ITEM_FAILURE,
    payload: error
  }
}

export function setQuantityForItem(userId, sku, quantity) {
  const params = {userId, sku, quantity}
  const payload = fetchFromEndpoint('updateProductQuantity', params).then(response => response.json())
  return function (dispatch) {
    dispatch(setQuantityForItemRequest());
    return payload.then(data => {
      dispatch(setQuantityForItemSuccess(data[0].cart));
    }).catch(error => {
      return dispatch(setQuantityForItemFailure(error));
    })
  }
}

function calculateTotalPriceRequest() {
  return {
    type: types.CALCULATE_TOTAL_PRICE_REQUEST
  }
}

export function calculateTotalPriceSuccess(data) {
  return { type: types.CALCULATE_TOTAL_PRICE_SUCCESS, payload: data}
}

function calculateTotalPriceFailure(error) {
  return {
    type: types.CALCULATE_TOTAL_PRICE_FAILURE,
    payload: error
  }
}

function transformCartItems(cartItems) {
  const classic = cartItems.find(item => item.sku === 'classic')
  const standout = cartItems.find(item => item.sku === 'standout')
  const premium = cartItems.find(item => item.sku === 'premium')
  const flatCartItems = {
    classic: classic ? classic.quantity : 0,
    standout: standout ? standout.quantity : 0,
    premium: premium ? premium.quantity : 0
  }
  return flatCartItems
}

export function calculateTotalPrice(userId, cartItems) {
  const flatCartItems = transformCartItems(cartItems)
  const payload = fetchFromEndpoint('calculateTotalPrice', {userId, ...flatCartItems}).then(response => response.json())
  return function(dispatch) {
    dispatch(calculateTotalPriceRequest())
    return payload.then(data => {
      dispatch(calculateTotalPriceSuccess(data))
    }).catch(error => {
      return dispatch(calculateTotalPriceFailure(error))
    })
  }
}

export function setQuantityAndCalculateTotal(userId, sku, quantity) {
  return (dispatch, getState) => {
    return dispatch(setQuantityForItem(userId, sku, quantity)).then(() => {
      const fetchedCart = getState().cart.cart
      return dispatch(calculateTotalPrice(userId, fetchedCart))
    })
  }
}
