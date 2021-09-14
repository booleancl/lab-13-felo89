const childProcess = require('child_process');

function execute(cmd) {
  const promise = new Promise((resolve, reject) => {
    childProcess.exec(cmd, (error, result) =>
      error === null ? resolve(result) : reject(error)
    )
  })

  return promise
}

async function getGitUserData() {
  // DESAFÍO PARA LA CLASE: Escribir función execute que utilice childProcess.exec
  const gitConfigData = await execute('git config --list')

  return gitConfigData
}

// function getGitUserData() {
//   const gitConfigData = childProcess.exec('git config --list', (error, result) => {
//     console.log('results of execution of command\n\n')
//     console.log(result)
//   })
// }
//getGitUserData()

module.exports = {
  getGitUserData
}
