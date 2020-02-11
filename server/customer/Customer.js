const productTypes = require('./productTypes')

class Customer {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.pricingRules = [
      {
        productType: productTypes.small,
        retailPrice: 269.99
      },
      {
        productType: productTypes.medium,
        retailPrice: 322.99
      },
      {
        productType: productTypes.large,
        retailPrice: 394.99
      }
    ]
    this.cart = []
  }
}
module.exports = Customer;
