'use strict'

let apiUrl
const apiUrls = {
  production: 'https://powerful-meadow-13173.herokuapp.com/',
  development: 'https://sheltered-dawn-49797.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
