var customerData = require('./customer/CustomerData')
const CheckoutService = require('./checkout/CheckoutService')
const ProductService = require('./product/ProductService')

const PricingRules = require('./customer/PricingRules')
const Checkout = require('./checkout/Checkout')

const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors())

const port = process.env.PORT || 5000;

app.get('/api/calculateTotalPrice', (req, res) => {
  //Convert to the format: ['classic', 'classic', 'standout', 'premium', 'premium' etc]
  const userId = req.query.userId
  const cartItems = mapToArray(req.query)

  let pricingRules = new PricingRules()

  let checkout = Checkout.New(pricingRules)
  cartItems.map(item => {
    checkout.add(item)
  })

  const total = { total: checkout.total() };
  res.send(total)
});

//*****************************************************************************

app.get('/api/getCartByUser', (req, res) => {
  const cart = CheckoutService.getCartByUser(req.query.userId, customerData)
  res.send(cart)
});

app.get('/api/addToCart', (req, res) => {
  customerData = CheckoutService.addToCart(req.query.userId, req.query.product, req.query.quantity, customerData)
  updatedCart = CheckoutService.getCartByUser(req.query.userId, customerData)
  res.send(updatedCart)
});

app.get('/api/updateProductQuantity', (req, res) => {
  customerData = CheckoutService.updateProductQuantity(req.query.userId, req.query.sku, req.query.quantity, customerData)
  updatedCart = CheckoutService.getCartByUser(req.query.userId, customerData)
  res.send(updatedCart)
});

app.get('/api/getAllProducts', (req, res) => {
  const products = ProductService.getAllProducts()
  res.send(products)
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const mapToArray = (cartItems) => {
  var itemArray = []

  while (cartItems.classic != 0) {
    itemArray.push('classic')
    cartItems.classic = cartItems.classic - 1
  }
  while (cartItems.standout != 0) {
    itemArray.push('standout')
    cartItems.standout = cartItems.standout - 1
  }
  while (cartItems.premium != 0) {
    itemArray.push('premium')
    cartItems.premium = cartItems.premium - 1
  }
  return itemArray
}
