class Product {
  constructor(sku, name, price, quantity) {
    this.sku = sku,
    this.name = name
    this.price = price,
    this.quantity = quantity
    this.saving = 0
    this.total = price*quantity
  }

}
module.exports = Product;
