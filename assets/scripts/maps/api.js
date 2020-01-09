
const create = function(data) {
  return $.ajax({
    url: 'http://localhost:4741/locations',
    method: 'POST',
    data
  })
}
const index = function() {
  return $.ajax({
    url: 'http://localhost:4741/locations'
  })
}


module.exports = {
  create,
  index
}