// In reality, this should be perform fetch api
// For simplicity
import React from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import Cookie from 'js-cookie'
const Users = ({ selectValue, handleSelectChange }) => {
  // set cookie here :(
  Cookie.set('userId', selectValue)
  const users = [
    {
      id: 'others',
      username: 'Others'
    },
    {
      id: 'AMAZON',
      username: 'AMAZON',
    },
    {
      id: 'FACEBOOK',
      username: 'FACEBOOK',
    },
    {
      id: 'INFOSYS',
      username: 'INFOSYS',
    },
  ]
  return (
    <SelectInput
      name="userId"
      label="Login User"
      value={selectValue}
      defaultOption="Select User"
      options={users}
      onChange={handleSelectChange}
    />
  )
}

Users.propTypes = {
  selectValue: PropTypes.string,
  handleSelectChange: PropTypes.func
}

export default Users