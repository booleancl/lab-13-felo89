const http = require('http')

function getCountriesAsync() {
  const url = 'https://restcountries.eu/rest/v2/all'

  http.get(url, (response) => {
    let data = ''

    response.on('data', (responseDataChunk) => {
      data += responseDataChunk
    })
    response.on('end', () => {
      console.log(data)
    })
    response.on('error', (error) => {
      console.log(error)
    })
  })
}
// getCountriesAsync()

module.exports = {
  getCountriesAsync,
}
