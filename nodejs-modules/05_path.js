const path = require('path')

function getPlatformPathDelimiter() {
  console.log(`DELIMITER ${path.delimiter}`)
  return path.delimiter
}
//getPlatformPathDelimiter()

function resolvePath() {
  const filePath = path.resolve('nodejs-modules', './hola.txt')
  console.log(
    `RESOLVE PATH: ${filePath}`
  )
  return filePath
}
//resolvePath()

function joinPaths() {
  const paths = [
    '..//',
    '/nodejs-modules',
    'hola.txt'
  ]
  // const filePath = path.join(__dirname,'..//','/nodejs-modules', 'hola.txt')
  const filePath = path.join(...paths)
  console.log(
    `JOIN PATH: ${filePath}`
  )
  return filePath
}
//joinPaths()

function dirnamePath() {
  const filePath = path.resolve(
    'nodejs-modules',
    '../',
    'nodejs-modules',
    './hola.txt'
  )
  const pathDirname = path.dirname(filePath)

  return pathDirname
}
//dirnamePath()

function getExtension() {
  const filePath = path.resolve('nodejs-modules', './hola.txt')
  
  //const fileExtension = path.extname(__filename)
  const fileExtension = path.extname(filePath)
  
  return fileExtension
}
//getExtension()

function normalizePath() {
  const normalizedPath = path.normalize(`${__dirname}//repl-scripts/../repl-scripts/01_hello.js`)
  
  return normalizedPath
}
//normalizePath()

module.exports = {
  getPlatformPathDelimiter,
  resolvePath,
  joinPaths,
  dirnamePath,
  getExtension,
  normalizePath,
}
