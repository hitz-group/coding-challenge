const Product = require('../product/Product')
const productDetails = require('../product/ProductDetails')
const products = productDetails.products

class CheckoutService {

  static addToCart(customerId, productName, quantity, customerData) {
    const customer = customerData.find(customer => (customer.id === customerId))
    const product = customer.cart.filter(p => p.sku === productName)

    if (product.length > 0) {
      customer.cart.filter(item => item.sku === productName).map(item => {
        item.quantity = (parseInt(item.quantity) + parseInt(quantity))
        item.total = item.price * item.quantity
      })
    } else {
      const productDetails = products.find(item => item.id === productName)
      const newItem = new Product(productDetails.id, productDetails.name, productDetails.price, quantity)
      customer.cart.push(newItem)
    }
    return customerData
  }

  static updateProductQuantity(customerId, product, quantity, customerData) {
    const customer = customerData.find(customer => (customer.id === customerId))
    if (!quantity) {
      customer.cart = customer.cart.filter(item => item.sku !== product)
    } else {
      customer.cart.map((item) => {
        item.quantity = (item.sku === product) ? quantity : item.quantity
        item.total = item.price * item.quantity
      })
    }
    return customerData
  }

  static getCartByUser(customerId, customerData) {
    return customerData.filter(customer => customer.id === customerId)
  }
}

module.exports = CheckoutService;
