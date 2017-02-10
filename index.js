/*
* @Author: shikar
* @Date:   2017-02-11 00:41:41
* @Last Modified by:   shikar
* @Last Modified time: 2017-02-11 00:50:15
*/
'use strict'
const got = require('got')

const url = 'https://freegeoip.net/json/'

function geoip (ip) {
  return got(url+ip, { json: true }).then(res => {
    return res.body
  }).catch(err => {
    let e = new Error()
    if (err.statusCode !== undefined && err.statusCode !== 200) {
      e.code = 'BAD_REQUEST'
    } else {
      e.code = 'BAD_NETWORK'
    }
    throw e
  })
}
module.exports = geoip
