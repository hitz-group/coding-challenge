/*eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { loadProducts } from './actions/productActions'
import './styles/styles.css'

import routes from './routes'

const store = configureStore()
store.dispatch(loadProducts())
render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
