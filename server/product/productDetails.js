const productTypes = {
  small: 'Small Pizza',
  medium: 'Medium Pizza',
  large: 'Large Pizza'
}
const products = [
  {
    id: productTypes.small,
    name: 'Small Pizza',
    price: 269.99,
    description: '10 inch pizza for one person'
  },
  {
    id: productTypes.medium,
    name: 'Medium Pizza',
    price: 322.99,
    description: '12 inch Pizza for two persons'
  },
  {
    id: productTypes.large,
    name: 'Large Pizza',
    price: 394.99,
    description: '15 inch Pizza for four persons'
  }
]
module.exports = {
  products,
  productTypes
};
