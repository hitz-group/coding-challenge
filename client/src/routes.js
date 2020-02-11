import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App' //eslint-disable-line import/no-named-as-default
import ProductPage from './components/product/ProductPage' //eslint-disable-line import/no-named-as-default
import CartPage from './components/cart/CartPage' //eslint-disable-line import/no-named-as-default

export default (

  <Switch>
    <App>
      <Route exact path="/" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
    </App>
  </Switch>
)
