'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onCreate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .then(() => onIndex(event))
    .catch(ui.onUpdateFailure)
}

// const onDelete = event => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.destroy(formData)
//     .then(ui.onDestroySuccess)
//     .catch(ui.onDestroyFailure)
// }

const onDeleteGoal = (event) => {
  event.preventDefault()
  const goalId = event.target.dataset.id
  api.deleteGoal(goalId)
    .then(() => onIndex(event))
    .catch(ui.failure)
}

// list event listeners and event handlers below:
const addHandlers = event => {
  $('#create').on('submit', onCreate)
  $('#index').on('click', onIndex)
  $('#change-goal').on('submit', onUpdate)
  $('.contain').on('click', '.delete-goal', onDeleteGoal)
  // $('#delete-goal').on('submit', onDelete)
}
module.exports = {
  addHandlers
}
