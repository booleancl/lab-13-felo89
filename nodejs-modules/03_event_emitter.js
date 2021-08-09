const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

// eventEmitter.on('customEvent', (data) => {
//   console.log(`listen "customEvent" with data: ${data}`)
// })

//eventEmitter.emit('customEvent', { grade: 27 })

module.exports = {
  eventEmitter
}
