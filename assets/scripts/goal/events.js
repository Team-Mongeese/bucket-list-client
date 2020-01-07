'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')

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
  // console.log('onIndex')
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
    .catch(ui.onUpdateFailure)
}

const onDelete = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.destroy(formData)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

// list event listeners and event handlers below:
const addHandlers = event => {
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  // $('#show').on('submit', onShow)
  $('#change-goal').on('submit', onUpdate)
  $('#delete-goal').on('submit', onDelete)
}
module.exports = {
  addHandlers
}
