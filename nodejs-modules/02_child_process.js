const childProcess = require('child_process');

// function execute() {
//   const promise = new Promise((resolve, reject) => {})
// }

// async function getGitUserData() {
//   // DESAFÍO PARA LA CLASE: Escribir función execute que utilice childProcess.exec
//   const gitConfigData = await execute('git config --list')

//   return gitConfigData
// }

function getGitUserData() {
  const gitConfigData = childProcess.exec('git config --list', (error, result) => {
    console.log('results of execution of command\n\n')
    console.log(result)
  })
}
//getGitUserData()

module.exports = {
  getGitUserData
}
