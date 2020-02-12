const productDetails = require('./ProductDetails')

class ProductService {
  static getAllProducts() {
    return productDetails.products
  }
}

module.exports = ProductService
