'use strict'
const config = require('../config')
const store = require('../store')

const signUp = formData => {
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    // use back tick here for headers
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {Authorization: `Token token=${store.user.token}`}
    // use back tick here for headers
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
