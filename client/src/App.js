import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Header from './components/common/Header'
import 'whatwg-fetch'

export class App extends React.Component {
  state = {
    response: ''
  };
 //  componentDidMount() {
 //    this.callApi()
 //      .then(res => this.setState({ response: res.express }))
 //      .catch(err => console.log(err));
 //  }
 //  callApi = async () => {
 //   const response = await fetch('http://localhost:5000/api/hello');
 //   const body = await response.json();
 //   if (response.status !== 200) throw Error(body.message);
 //   return body;
 // };
  render () {
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
  return {...state.cart}
}

export default connect(mapStateToProps)(App)
