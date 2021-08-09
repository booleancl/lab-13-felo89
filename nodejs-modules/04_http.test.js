const http = require('http')
const EventEmitter = require('events')
const { getCountriesAsync } = require('./04_http')

jest.mock('http')

describe('http module in NodeJS', () => {

  beforeEach(() => {
    console.log = jest.fn()
  })

  it('handle data successfully using "data" and "end" events', () => {
    const responseEmitter = new EventEmitter()
    http.get.mockImplementation((url, callback) => {
      callback(responseEmitter)
    })
    getCountriesAsync()
    const partialData1 = '{"id": 1, "name": "Chile"'
    const partialData2 = ', "region": "America", "subregion": "South America"}'
    responseEmitter.emit('data', partialData1)
    responseEmitter.emit('data', partialData2)
    
    responseEmitter.emit('end')

    expect(console.log).toHaveBeenCalledWith(partialData1 + partialData2)
  })

  it('handle data rejection using "error" event', () => {
    const responseEmitter = new EventEmitter()
    const error = new Error('critical error')
    http.get.mockImplementation((url, callback) => {
      callback(responseEmitter)
    })

    getCountriesAsync()

    responseEmitter.emit('error', error)

    expect(console.log).toHaveBeenCalledWith(error)
  })

})
