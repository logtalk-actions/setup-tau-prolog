const core = require('@actions/core')
const {installTauProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const version = core.getInput('tau-prolog-version', {required: true})

  console.log(`##[group]Installing Tau Prolog ${version}`)
  await installTauProlog(version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-tau-prolog does not support Windows at this time'
    )
}
