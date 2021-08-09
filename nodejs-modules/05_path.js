const path = require('path')

function getPlatformPathDelimiter() {
  console.log(`DELIMITER ${path.delimiter}`)
  //return path.delimiter
}
//getPlatformPathDelimiter()

function resolvePath() {
  const filePath = path.resolve('nodejs-modules', './hola.txt')
  console.log(
    `RESOLVE PATH: ${filePath}`
  )
  //return filePath
}
//resolvePath()

function joinPaths() {
  const paths = [
    '..//',
    '/nodejs-modules',
    'hola.txt'
  ]
  const filePath = path.join(__dirname,'..//','/nodejs-modules', 'hola.txt')
  //const filePath = path.join(/* utilizar spread */)
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
  
  console.log(
    `GET DIRNAME FROM PATH ${pathDirname}`
  )

  return
}
//dirnamePath()

function getExtension() {
  const filePath = path.resolve('nodejs-modules', './hola.txt')
  
  //const fileExtension = path.extname(__filename)
  const fileExtension = path.extname(filePath)
  
  console.log(
    `EXTENSION NAME FROM PATH ${fileExtension}`
  )

  return
}
//getExtension()

function normalizePath() {
  const normalizedPath = path.normalize(`${__dirname}//repl-scripts/../repl-scripts/01_hello.js`)
  
  console.log(
    `NORMALIZE PATH ${normalizedPath}`
  )
  return
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
