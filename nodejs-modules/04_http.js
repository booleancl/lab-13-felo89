const http = require('http')

function getCountriesAsync() {
  const url = 'https://restcountries.eu/rest/v2/all'

  http.get(url, (response) => {
    let data = ''

    response.on('data', (responseDataChunk) => {})
    response.on('end', () => {})
    response.on('error', () => {})
  })
}
// getCountriesAsync()

module.exports = {
  getCountriesAsync,
}
