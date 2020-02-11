import * as types from '../actions/actionTypes';


const DEFAULT_SCHEMA = {
  products: [],
  isLoading: false,
  error: null,
}

export default function productReducer(state = DEFAULT_SCHEMA, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      }

    case types.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
