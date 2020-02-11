const productDetails = require('../product/productDetails')
const Customer = require('./Customer')
const adTypes = productDetails.adTypes

const CustomerData = [
  new Customer('INFOSYS', 'Infosys'),
  new Customer('AMAZON', 'Amazon'),
  new Customer('FACEBOOK', 'Facebook'),
  new Customer('others', 'Default')
]
module.exports = CustomerData;
