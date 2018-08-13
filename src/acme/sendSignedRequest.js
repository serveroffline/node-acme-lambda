const config = require('../../config')
const getNonce = require('./getNonce')
const RSA = require('rsa-compat').RSA
const agent = require('superagent')

const sendSignedRequest = (payload, keypair, url) =>
  getNonce()
  .then((data) =>
    agent.post(url)
    .send(RSA.signJws(keypair, new Buffer(JSON.stringify(payload)), data))
    .set('User-Agent', `${config['agent-name']}/${config['agent-version']}`)
  )

module.exports = sendSignedRequest
