const googleMapsModule = require('load-google-maps-api')

const loadGoogleMapsApi = function() {
  const google = googleMapsModule({key: "AIzaSyCYgNZbS1sheCBytx49tZH97J7ggsVlXh4"})
  return google
}

const createMap = function(google, mapElement) {
  const map = new google.Map(mapElement, {
    center: {
      lat: 42.3601,
      lng: -71.0589
    },
    zoom: 10 
    })
  return map
}

module.exports = {
  loadGoogleMapsApi,
  createMap
}