const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const marker = require('./marker')
function addHandlers() {
  $('#search').on('submit', e => {
    e.preventDefault()
    const data = getFormFields(e.target)
    api.create(data)
      .then(onCreate)
      .catch(console.error)
  })
  $('#location').on('keyup', () => {
    console.log('change')
  })
}

function onCreate(response) {
  const location = response.location.location
  marker.create(location)
}

module.exports = {
  addHandlers
}