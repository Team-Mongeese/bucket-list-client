'use strict'

const store = require('../store')
const config = require('../config')

const create = formData => {
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const index = formData => {
  // console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    // console.log
    data: formData
  })
}

const update = formData => {
  // console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/goals' + '/' + formData.goal.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: formData
  })
}
const destroy = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/goals' + '/' + formData.goal.id,
    method: 'DELETE',
    headers: {Authorization: `Token token=${store.user.token}`}
  })
}
module.exports = {
  create,
  index,
  // show
  update,
  destroy
}
