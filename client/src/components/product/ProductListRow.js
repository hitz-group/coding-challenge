import React from 'react'
import PropTypes from 'prop-types'

export default class ProductListRow extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func,
    userId: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = { value: 1 }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClick() {
    this.props.onAddToCart(this.props.userId, this.props.product, this.state.value)
  }

  render() {
    const { product } = this.props
    return (
      <div className="main-content__product-wrapper">
        <h2 className="main-content__product-name">{product.name}</h2>
        <h5 className="main-content__product-price">${product.price}</h5>
        <div className="main-content__product-description">{product.description}</div>
        <div className="main-content__form-wrapper">
          <input type="number" value={this.state.value} onChange={this.handleChange} min="1" />
          <button onClick={this.handleClick}>Add to Cart</button>
        </div>
      </div>
    )
  }
}
