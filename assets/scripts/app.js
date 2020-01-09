'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store')
const authEvents = require('./auth/events')
const goalEvents = require('./goal/events')
const mapEvents = require('./maps/events')

window.initMap = function() {
  store.google = google
  const mapElement = document.getElementById('map')
  store.map = new google.maps.Map(mapElement, { zoom: 10, center: { lat: 42.3601, lng: -71.0589 }})
  store.service = new google.maps.places.PlacesService(store.map)
}
$(() => {
  authEvents.addHandlers()
  goalEvents.addHandlers()
  mapEvents.addHandlers()

})
