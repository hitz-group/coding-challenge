import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const CartItemList = ({ cart, onDestroy, onQuantityIncrease, onQuantityDecrease, grandTotal }) => {
  return (
    <div className="main-content__cart-container">
      <h2 className="cart-title">Your shopping cart</h2>
      <div className="cart-wrapper">
        <div className="item-wrapper__header">
          <span className="item-col">Item</span>
          <span className="item-col">Price</span>
          <span className="item-col">Quantity</span>
          <span className="item-col">You Save</span>
          <span className="item-col">Subtotal</span>
          <span className="item-col" />
        </div>
        {cart.map(item =>
          <CartItem
            item={item}
            key={item.sku}
            onQuantityIncrease={onQuantityIncrease}
            onQuantityDecrease={onQuantityDecrease}
            onDestroy={onDestroy}
          />
        )}
        <div className="grandTotal">GrandTotal: {grandTotal}</div>
      </div>
    </div>
  )
}
CartItemList.propTypes = {
  cart: PropTypes.array,
  onDestroy: PropTypes.func,
  onQuantityIncrease: PropTypes.func,
  onQuantityDecrease: PropTypes.func,
  grandTotal: PropTypes.string,
}

export default CartItemList
