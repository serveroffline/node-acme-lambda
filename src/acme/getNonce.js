const config = require('../../config')
const agent = require('superagent')

const getNonce = () =>
  agent.get(`${config['acme-directory-url']}/directory`)
  .set('User-Agent', `${config['agent-name']}/${config['agent-version']}`)
  .then((data) => data.header['replay-nonce'])
  .catch((e) => {
    console.error(`Error getting nonce`, e)
    throw e
  })

module.exports = getNonce
