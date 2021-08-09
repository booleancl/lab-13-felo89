const { eventEmitter } = require('./03_event_emitter')

describe('Event Emitter', () => {
  console.log = jest.fn()

  it('can emit custom event and listen', () => {
    const data = { grade: 27 }
    eventEmitter.emit('customEvent', data)

    expect(console.log).toHaveBeenCalledWith(`listen "customEvent" with data: ${data}`)
  })
})