'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onCreate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.goal.status = 'No'
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(() => api.index())
    .then(ui.onIndexSuccessDisplay)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccessDisplay)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// const onUpdatedIndex = event => {
//   event.preventDefault()
//   api.index()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }

const onUpdate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .then(() => api.index())
    .then(ui.onIndexSuccessDisplay)
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
    .then(ui.onDestroySuccess)
    .then(() => api.index())
    .then(ui.onIndexSuccessDisplay)
    .catch(ui.failure)
}

const onCompletedGoal = (event) => {
  event.preventDefault()
  const goalID = event.target.dataset.id
  api.updateStatus(goalID)
    .then(ui.onUpdateSuccess)
    .then(() => api.index())
    .then()
    .then(ui.onIndexSuccessDisplay)
    .catch(ui.onUpdateFailure)
}

// const checkboxClicked = event => {
//   $(document).ready(function() {
//     $('input[type="checkbox"]').click(function() {
//       if ($(this).is(':checked')) {
//         alert('Checkbox is checked.');
//       } else if ($(this).is(':not(:checked)')) {
//         alert('Checkbox is unchecked.');
//       }
//     })
//   });
// }
// list event listeners and event handlers below:

const addHandlers = event => {
  $('#create').on('submit', onCreate)
  $('#index').on('click', onIndex)
  $('#change-goal').on('submit', onUpdate)
  $('.contain').on('click', '.delete-goal', onDeleteGoal)
  $('.contain').on('click', '.completed-goal', onCompletedGoal)
  // $('#delete-goal').on('submit', onDelete)
}
module.exports = {
  addHandlers
}
