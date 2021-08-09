const { normalize } = require('path')
const path = require('path')
const { getPlatformPathDelimiter, resolvePath, joinPaths, dirnamePath, normalizePath, getExtension } = require('./05_path')

describe('Path module', () => {

  it('01 - delimiter based on platform', () => {
    const expected = process.platform === 'win32' ? ';': ':'

    expect(getPlatformPathDelimiter()).toEqual(expected)  
  })

  it('02 - resolve path adding absolute path', () => {
    const expected = `${__dirname}/hola.txt`

    expect(resolvePath()).toEqual(expected)
  })

  it('03 - join normalize path without add absolute url', () => {
    expect(joinPaths()).toEqual('../nodejs-modules/hola.txt')
  })

  it('04 - returns dirname based on filepath', () => {
    const expected = __dirname

    expect(dirnamePath()).toEqual(expected)
  })

  it('05 - return extension of file', () => {
    const expected = '.txt'

    expect(getExtension()).toEqual(expected)
  })

  it('06 - normalize path', () => {
    const expected = `${__dirname}/repl-scripts/01_hello.js`

    expect(normalizePath()).toEqual(expected)
  })
})

// console.log(
//   'NORMALIZE PATH',
//   path.normalize(`${__dirname}//../repl-scripts/../repl-scripts/01_hello.js`)
// )
