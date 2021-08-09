// Recordemos que cada vez que ejecutamos un script a través de node será envuelto en una función que tiene algunos argumentos definidos
// function(exports, module, require, __filename, __dirname){

console.log('++++++++++++++++++++++++++++++++++++')
console.log('+++++ SCRIPT EXECUTION +++++')
console.log('exports:', exports)
console.log('module:', module)
console.log('exports === module.exports: ', exports === module.exports)
console.log('require function definition:', require.toString())
console.log('__dirname:', __dirname)
console.log('__filename:', __filename)
console.log('++++++++++++++++++++++++++\n\n')

/*
  https://nodejs.org/dist/latest-v14.x/docs/api/process.html
*/

console.log('++++++++++++++++++++++++++++++++++++')
console.log('+++++ PROCESS ARGS +++++')
console.log('ARGUMENTS: ', process.argv)
console.log('TYPE_OF ARGUMENTS: ', typeof process.argv)
console.log('EXEC_PATH: ', process.execPath)
console.log('++++++++++++++++++++++++++\n\n')

console.log('++++++++++++++++++++++++++++++++++++')
console.log('+++++ PROCESS SYSTEM +++++')
process.env.DATABASE_URL = 'postgres://mydatabase.myschema'

console.log('ENVIRONMENT VARIABLES: ', process.env)
console.log('PLATFORM: ', process.platform)
console.log('CWD: ', process.cwd())

/*
  https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_process_exit_code
  
  0 significa salir sin errores
  1 significa salir con errores
*/

throw new Error('Program failed')
//process.exit(1)
//process.exitCode = 1

/*
  EVENTOS
*/

//  The 'beforeExit' event is not emitted for conditions causing explicit termination, such as calling process.exit() or uncaught exceptions

process.on('beforeExit', (code) => {
  console.log(`Process beforeExit event with code: ${code}`)
})

process.on('exit', (code) => {
  console.log(`Process exit event with code: ${code}`)
})
