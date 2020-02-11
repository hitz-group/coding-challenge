import * as types from '../actions/actionTypes';
import * as cartActions from '../actions/cartActions'
import Cookie from 'js-cookie'

const DEFAULT_SCHEMA = {
  cart: [],
  isLoading: false,
  error: null,
}

export default function cartReducer(state = DEFAULT_SCHEMA, action) {
  switch (action.type) {
    case types.LOAD_CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.LOAD_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        fetched: true,
        error: null
      }

    case types.LOAD_CART_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case types.ADD_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        error: null
      }

    case types.ADD_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case types.SET_QUANTITY_FOR_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.SET_QUANTITY_FOR_ITEM_SUCCESS:
      //this.props.actions.calculateTotalPrice(Cookie.get('userId'), action.payload)
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        error: null,
      }

    case types.SET_QUANTITY_FOR_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }

    case types.CALCULATE_TOTAL_PRICE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.CALCULATE_TOTAL_PRICE_SUCCESS:
      return {
        ...state,
        grandTotal: action.payload.total,
        isLoading: false,
        fetched: true,
        error: null
      }

    case types.CALCULATE_TOTAL_PRICE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}
