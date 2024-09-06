const github = require('github-url-to-object')
const bitbucket = require('bitbucket-url-to-object')

module.exports = function packageRepo (pkg) {
  if (!pkg) return null
  if (typeof pkg === 'string') pkg = require(pkg)
  if (!pkg.repository) return null
  const input = pkg.repository.url || pkg.repository
  return bitbucket(input) || github(input)
}
