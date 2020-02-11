import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'
import Cookie from 'js-cookie'
import ProductList from './ProductList'
import * as cartActions from '../../actions/cartActions'
import Users from '../common/User'
import Loader from '../common/Loader'

export class ProductPage extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    actions: PropTypes.object,
    cart: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      selectValue: Cookie.get('userId') || 'default',
      openModal: false,
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.onAddToCart = this.onAddToCart.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    this.props.actions.loadCartItems(this.state.selectValue)
  }

  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value })
    this.props.actions.loadCartItems(e.target.value)
  }
  onAddToCart(userId, product, quantity) {
    // dispatch an action
    this.props.actions.addCartItem(userId, product, quantity).then(() => {
      if (this.props.cart.error) {
        this.setState({ openModal: true })
      } else {
        // all good, redirect to cart page
        this.context.router.history.push('/cart')
      }
    })
  }
  closeModal() {
    this.setState({ openModal: false })
  }
  render() {
    const { products, isLoading, } = this.props;

    if (isLoading) {
      return <Loader />
    }
    const ref = c => this.selectInput = c

    return (
      <div>
        <Modal
          isOpen={this.state.openModal}
          contentLabel="Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <h3 className="modal__header error">{this.props.cart.error}</h3>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        <h2 className="main-content__product-title">Much more than just a normal till...</h2>
        <h3 className="main-content__product-subtitle">When you purchase TILL you not only get a POS system but key analytics to help you grow your business
        </h3>
        <Users selectValue={this.state.selectValue} handleSelectChange={this.handleSelectChange} />
        <ProductList products={products} userId={this.state.selectValue} onAddToCart={this.onAddToCart} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.products,
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
