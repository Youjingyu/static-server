#!/usr/bin/env node

const type = process.argv[2]
const staticPath = process.argv[3]

if (type === '-v' || type === '--version') {
  console.log(require('../package.json').version)
  return
}

const map = {
  http: '../http.js',
  https: '../https.js',
  http2: '../http2.js'
}
const codeToExecute = map[type]
const error = 'please set server type and source path, for example: static-server https absolute-path-to-resource'
if (codeToExecute) {
  if (!staticPath) {
    console.log('\x1b[33m', error, '\x1b[0m')
    return
  }
  require(codeToExecute)(staticPath)
} else {
  console.log('\x1b[33m', error, '\x1b[0m')
}
