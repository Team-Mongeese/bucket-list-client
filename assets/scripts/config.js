'use strict'

let apiUrl
const apiUrls = {
  production: 'https://powerful-meadow-13173.herokuapp.com',
  // change back to localhost:4741 once we clone our server repo down locally
  development: 'https://tic-tac-toe-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
