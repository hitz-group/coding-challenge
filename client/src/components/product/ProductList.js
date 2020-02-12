import React from 'react'
import PropTypes from 'prop-types'
import ProductListRow from './ProductListRow'


const ProductList = ({ products, userId, onAddToCart }) => {
  return (
    <div className="main-content__product-container">
      {products.map(product =>
        <ProductListRow key={product.id} product={product} userId={userId} onAddToCart={onAddToCart} />
      )}
    </div>
  )
}
ProductList.propTypes = {
  products: PropTypes.array,
  userId: PropTypes.string,
  onAddToCart: PropTypes.func,
}

export default ProductList
