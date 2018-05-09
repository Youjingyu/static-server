#!/usr/bin/env node

const type = process.argv[2]
const staticPath = process.argv[3]

if (type === '-v' || type === '--version') {
  console.log('\x1b[32m', require('../package.json').version, '\x1b[0m')
  return
}

const map = {
  http: '../http.js',
  https: '../https.js',
  http2: '../http2.js'
}
const codeToExecute = map[type]
const error = 'please set server type and source path, for example: static-server https path-to-static-source'
if (codeToExecute) {
  if (!staticPath) {
    console.log('\x1b[33m', error, '\x1b[0m')
    return
  }
  require(codeToExecute)(staticPath)
} else {
  console.log('\x1b[33m', error, '\x1b[0m')
}
