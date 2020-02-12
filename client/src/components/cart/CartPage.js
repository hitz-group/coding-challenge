import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../actions/cartActions'
import CartItemList from './CartItemList'
import Loader from '../common/Loader'

export class CartPage extends React.Component {
  static propTypes = {
    cart: PropTypes.array,
    isLoading: PropTypes.bool,
    actions: PropTypes.object,
    fetched: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context)
    this.onDestroy = this.onDestroy.bind(this)
    this.onQuantityDecrease = this.onQuantityDecrease.bind(this)
    this.onQuantityIncrease = this.onQuantityIncrease.bind(this)
  }

  componentDidMount() {
    const userId = Cookie.get('userId')
    if (!this.props.fetched) {
      this.props.actions.loadCartItems(userId)
    }
    this.props.actions.calculateTotalPrice(userId, this.props.cart)
  }

  onQuantityIncrease(sku, quantity) {
    const userId = Cookie.get('userId')
    // this.props.actions.setQuantityForItem(userId, sku, quantity + 1)
    // this.props.actions.calculateTotalPrice(userId, this.props.cart)
    this.props.actions.setQuantityAndCalculateTotal(userId, sku, quantity + 1)
  }

  onQuantityDecrease(sku, quantity) {
    const userId = Cookie.get('userId')
    // this.props.actions.setQuantityForItem(userId, sku, quantity - 1)
    // this.props.actions.calculateTotalPrice(userId, this.props.cart)
    this.props.actions.setQuantityAndCalculateTotal(userId, sku, quantity - 1)
  }

  onDestroy(sku) {
    const userId = Cookie.get('userId')
    // this.props.actions.setQuantityForItem(userId, sku)
    // this.props.actions.calculateTotalPrice(userId, this.props.cart)
    this.props.actions.setQuantityAndCalculateTotal(userId, sku)
  }

  render() {
    const { cart, isLoading, grandTotal } = this.props
    if (isLoading) {
      return <Loader />
    } else if (cart && cart.length === 0) {
      return <h3 className="cart__title--empty">There are no items in your cart at the moment.</h3>
    }

    return (
      <CartItemList
        cart={cart}
        onQuantityIncrease={this.onQuantityIncrease}
        onQuantityDecrease={this.onQuantityDecrease}
        onDestroy={this.onDestroy}
        grandTotal={grandTotal.toFixed(2)}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
