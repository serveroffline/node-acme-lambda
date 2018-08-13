const config = require('../../config')
const agent = require('superagent')

const getDiscoveryUrls = (discoveryUrl) =>
  agent.get(`${config['acme-directory-url']}/directory`)
  .set('User-Agent', `${config['agent-name']}/${config['agent-version']}`)
  .then((data) => data.body)

module.exports = getDiscoveryUrls
