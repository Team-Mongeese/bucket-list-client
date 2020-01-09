'use strict'
const store = require('../store')
const showGoalTemplate = require('../templates/goal-listing.handlebars')
const onSuccess = message => {
  $('#message').text(message).addClass('success').removeClass('failure').fadeIn(300).delay(1500).fadeOut(400)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').text(message).addClass('failure').removeClass('success').fadeIn(300).delay(1500).fadeOut(400)
  $('form').trigger('reset')
}

// const onSuccess = (goalMessage) => {
//   $('#goalMessage').removeClass('failure')
//   $('#goalMessage').addClass('success')
//   $('#goalMessage').text(goalMessage)
//   $('form').trigger('reset')
// }
//
// const onFailure = goalMessage => {
//   $('#goalMessage').removeClass('success')
//   $('#goalMessage').addClass('failure')
//   $('#goalMessage').text(goalMessage)
//   $('form').trigger('reset')
// }

const onCreateSuccess = (response) => {
  store.goal = response.goal
  onSuccess('You successfully created a goal!')
  // console.log(response)
  $('.container').show()
  $('p').remove()
  $('.box').addClass('alt-color')
}

const onCreateFailure = (response) => {
  onFailure('Failed to create goals')
}

const onIndexSuccess = (response) => {
  store.goals = response.goals
  const showGoalsHtml = showGoalTemplate({ goals: response.goals })
  onSuccess('Here are your goals')
  $('.goal-content').html(showGoalsHtml)
}

const onIndexFailure = () => {
  onFailure('Sorry; failed to get goals.')
}

// const onIndexSuccess = (response) => {
//   store.goals = response.goals
//   console.log(response)
//   $('.content').show()
//   const showGoalHtml = showGoalTemplate({ goals: response.goals })
//   $('.content').html(showGoalHtml)
// }
// const onIndexFailure = (response) => {
//   onFailure('Rut roh... somgthing went wrong! try again')
// }

const onUpdateSuccess = (response) => {
  // console.log(response)
  // store.goal = response.goal
  onSuccess('Your updated one of your goal!')
  // $('.content').hide()
}
const onUpdateFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

// const onDestroySuccess = (response) => {
//   onSuccess('Your just destroyed one of your goal!')
//   $('.content').hide()
// }
// const onDestroyFailure = (response) => {
//   onFailure('Rut roh... somgthing went wrong! try again')
// }

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure
  // onDestroySuccess,
  // onDestroyFailure
}
