const packageRepo = require('./')

packageRepo('./some/package.json')
// or packageRepo(somePackage)

/*
{
  user: 'monkey',
  repo: 'business',
  branch: 'master',
  tarball_url: 'https://api.github.com/repos/monkey/business/tarball/master',
  clone_url: 'https://github.com/monkey/business',
  https_url: 'https://github.com/monkey/business',
  travis_url: 'https://travis-ci.org/monkey/business',
  api_url: 'https://api.github.com/repos/monkey/business'
  zip_url: 'https://github.com/monkey/business/archive/master.zip'
}
*/
