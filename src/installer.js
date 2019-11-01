const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installTauProlog}

/**
 * Install Tau Prolog.
 *
 * @param {string} version
 */
async function installTauProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-tau-prolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-tau-prolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-tau-prolog-windows'), [version])
  }
}
