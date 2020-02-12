import React from 'react'
import PropTypes from 'prop-types'

export default class CartItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onDestroy: PropTypes.func,
    onQuantityIncrease: PropTypes.func,
    onQuantityDecrease: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
  }
  handleDecrease() {
    const { item } = this.props
    this.props.onQuantityDecrease(item.sku, item.quantity)
  }
  handleIncrease() {
    const { item } = this.props
    this.props.onQuantityIncrease(item.sku, parseInt(item.quantity))
  }
  handleDestroy() {
    const { item } = this.props
    this.props.onDestroy(item.sku)
  }

  render() {
    const { item } = this.props
    return (
      <div className="main-content__item-wrapper">
        <span className="item-col">
          {item.name}
        </span>
        <span className="item-col">
          {item.price}
        </span>
        <div className="item-col">
          <button onClick={this.handleDecrease}>-</button>
          <span className="quantity-text">{item.quantity}</span>
          <button onClick={this.handleIncrease}>+</button>
        </div>
        <span className="item-col">
          ${item.saving}
        </span>
        <span className="item-col">
          ${item.total}
        </span>
        <button onClick={this.handleDestroy}>Remove</button>
      </div>
    )
  }
}
