import 'whatwg-fetch'
import queryString from 'query-string'

const BASE_PATH = 'http://localhost:5000/api/'

export const fetchFromEndpoint = (endpoint, params) => {
  const url = `${BASE_PATH}${endpoint}?${queryString.stringify(params)}`
  return fetch(url)
}
