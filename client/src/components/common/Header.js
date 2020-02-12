import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Cookie from 'js-cookie'

const Header = ({ cart }) => {
  const user = Cookie.get('userId')
  return (
    <div className="global-header">
      <div className="global-header__wrapper">
        <div className="global-header__logo-wrapper">
          <a href="https://tillpos.co/">
            <img className="global-header__logo"
              src="https://tillpos.com.au/wp-content/uploads/2018/06/logo_primary-cropped.png"
              alt="Till logo" />
          </a>
          <div className="global-header__title">User</div>
        </div>
        <div className="global-header_login-status">
          <div>
            {user}
          </div>
        </div>
      </div>
      <nav>
        <NavLink exact to="/" activeClassName="active">Product</NavLink>
        {" | "}
        <NavLink to="/cart" activeClassName="active">Cart ({cart ? cart.length : 0})</NavLink>
      </nav>
    </div>
  )
}

Header.propTypes = {
  cart: PropTypes.array,
}

export default Header
