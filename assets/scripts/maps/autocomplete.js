const store = require('../store')

const find = function(val) {
  
  store.service.findPlaceFromQuery(request, (results, status) => {
    const place = results[0]
    map.setCenter(place.geometry.location)
  })
}

module.exports = {
  find
}