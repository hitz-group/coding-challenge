import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import 'whatwg-fetch'
import Header from './components/common/Header'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header cart={this.props.cart} />
        <div className="main-content">
          <div className="main-content__wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  cart: PropTypes.array,
  isLoading: PropTypes.bool
}

function mapStateToProps(state) {
  return { ...state.cart }
}

export default connect(mapStateToProps)(App)
