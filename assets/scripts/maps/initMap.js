let map = null
let service = null
let googleApi = null
const store = require('../store')
window.initMap = function() {
  store.googleApi = {}
  const googleApi = store.googleApi
  const mapDiv = this.document.getElementById('map')
  googleApi.map = new google.maps.Map(mapDiv, { zoom: 10 })
  googleApi.service = new google.maps.places.PlacesService(map)
}

const findLocation = (location) => {
  console.log(store.googleApi)
  const query = location
  const request = {
    query,
    fields: ['name', 'geometry']
  }
  service.findPlaceFromQuery(request, (results, status) => {
    const place = results[0]
    map.setCenter(place.geometry.location)
  })
}

// service.findPlaceFromQuery(request, (results, status) => {
//   const gaLocation = results[0]
//   map.setCenter(results[0].geometry.location);
//   const gaMarker = new google.maps.Marker({ map, position: results[0].geometry.location })
//   const infoWindow = new google.maps.InfoWindow()
//   google.maps.event.addListener(gaMarker, 'click', () => {
//     infoWindow.setContent(gaLocation.name)
//     infoWindow.open(map, gaMarker)
//   })
// })
module.exports = {
  findLocation
}