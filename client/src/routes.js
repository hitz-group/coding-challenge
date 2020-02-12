import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import ProductPage from './components/product/ProductPage'
import CartPage from './components/cart/CartPage'

export default (

  <Switch>
    <App>
      <Route exact path="/" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
    </App>
  </Switch>
)
