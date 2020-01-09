'use strict'

const store = require('../store')
const config = require('../config')

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

// const index = formData => {
//   console.log(formData)
//   console.log(store.goals)
//   return $.ajax({
//     url: config.apiUrl + '/goals',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     // console.log
//     data: formData
//   })
// }
const index = () => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = formData => {
  return $.ajax({
    url: config.apiUrl + '/goals' + '/' + formData.goal.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
// const destroy = formData => {
//   console.log(formData)
//   return $.ajax({
//     url: config.apiUrl + '/goals' + '/' + formData.goal.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const deleteGoal = (goalId) => {
  return $.ajax({
    url: config.apiUrl + '/goals/' + goalId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  // show
  update,
  deleteGoal
}
