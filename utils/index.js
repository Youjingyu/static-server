const fs = require('fs')
const path = require('path')

module.exports = {
  getCerOption () {
    return {
      key: fs.readFileSync(path.resolve(__dirname, '../certificate/private.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../certificate/ca.cer'))
    }
  }
}
