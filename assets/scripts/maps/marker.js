const store = require('../store')

const create = function(query) {
  const request = {
    query,
    fields: ['name', 'geometry']
  }
  store.service.findPlaceFromQuery(request, (results, status) => {
    const place = results[0]
    console.log(place)
    store.map.setCenter(place.geometry.location)
  })
}

module.exports = {
  create
}