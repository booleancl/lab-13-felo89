describe('fs module methods', () => {

  describe('01 - async methods', () => {
    beforeEach(() => {
      jest.mock('fs')
    })

    it('01.01 - read file', () => {
      const fs = require('fs')
      const { readFileFromFolder } = require('./01_filesystem')
  
      readFileFromFolder()
  
      expect(fs.readFile).toHaveBeenCalledWith(`${__dirname}/hola.txt`, 'utf-8', expect.any(Function))
    })

    it('01.02 - write file', () => {
      const fs = require('fs')
      const { writeFileFromFolder } = require('./01_filesystem')
      const newData = 'NodeJS writes in filesystem'

      writeFileFromFolder()

      expect(fs.writeFile).toHaveBeenCalledWith(`${__dirname}/adios.txt`, newData, 'utf-8', expect.any(Function))
    })

    it('01.03 - update file', () => {
      const fs = require('fs')
      const { updateFileFromFolder } = require('./01_filesystem')
      const newData = '-- initial-text updated --'

      updateFileFromFolder()

      expect(fs.writeFile).toHaveBeenCalledWith(`${__dirname}/update.txt`, newData, 'utf-8', expect.any(Function))
    })

    /* TODO 01.04 - deletefile */
  })

  describe('02 - sync methods', () => {

    beforeEach(() => {
      jest.resetModules()
      jest.unmock('fs')
    })

    it('02.01 - read file sync', () => {
      const { readFileFromFolderSync } = require('./01_filesystem')
      expect(readFileFromFolderSync()).toEqual(`¡Hola!

Este texto está escrito desde un archivo con extensión .txt`)
    })

    it('02.02 - write file sync', () => {
      const fs = require('fs')
      const { writeFileFromFolderSync } = require('./01_filesystem')

      writeFileFromFolderSync()

      expect(fs.readFileSync(`${__dirname}/adios-sync.txt`, 'utf-8')).toEqual('NodeJS writes in filesystem sync')
    })

    /* TODO 02.03 - update file */

    /* TODO 02.04 - update file */
  })

})
