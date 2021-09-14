const fs = require('fs')

/*
  Métodos asíncronos
*/
function readFileFromFolder() {
  fs.readFile(`${__dirname}/hola.txt`, 'utf-8', (error, data) => {
    console.log('data from file', data)
  })
}
//readFileFromFolder()

function writeFileFromFolder() {
  const newData = 'NodeJS writes in filesystem'

  fs.writeFile(`${__dirname}/adios.txt`, newData, 'utf-8', (error) => {
    console.log(`Error ${error}`)
  })
}
//writeFileFromFolder()

function updateFileFromFolder() {
  const newData = '-- initial-text updated --'

  fs.writeFile(`${__dirname}/update.txt`, newData, 'utf-8', (error) => {
    console.log(`Error ${error}`)
  })
}
//updateFileFromFolder()

/* TODO deleteFileFromFolder */
function deleteFileFromFolder() {}


/*
  Métodos síncronos
*/

function readFileFromFolderSync() {
  try {
    const data = fs.readFileSync(`${__dirname}/hola.txt`, 'utf-8')

    return data
  } catch(error) {
    console.error(error)
  }
}
//console.log(readFileFromFolderSync())

function writeFileFromFolderSync() {
  try {
    const newData = 'NodeJS writes in filesystem sync'
    fs.writeFileSync(`${__dirname}/adios-sync.txt`, newData, 'utf-8')
  } catch(error) {
    console.error(error)
  }
}
//writeFileFromFolderSync()

/* TODO updateFileFromFolderSync */
function updateFileFromFolderSync() {}

/* TODO deleteFileFromFolderSync */
function deleteFileFromFolderSync() {}


module.exports = {
  readFileFromFolder,
  readFileFromFolderSync,
  
  writeFileFromFolder,
  writeFileFromFolderSync,
  
  updateFileFromFolder,

}
