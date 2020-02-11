const productDetails = require('./productDetails')

class ProductService {
  static getAllProducts() {
    return productDetails.products
  }
}

module.exports = ProductService
