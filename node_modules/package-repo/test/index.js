const it = require('mocha').it
const describe = require('mocha').describe
const expect = require('chai').expect
const packages = require('require-dir')('./fixtures')

const packageRepo = require('..')

describe('packageRepo', function () {
  it('is a function', function () {
    expect(packageRepo).to.be.a('function')
  })

  it('supports nested repository.url values', function () {
    const repo = packageRepo(packages.github_nested_and_gitty)
    expect(repo.user).to.equal('ernesto')
    expect(repo.repo).to.equal('so-gitty')
  })

  it('supports non-nested values', function () {
    const repo = packageRepo(packages.github_https)
    expect(repo.user).to.equal('schlomo')
    expect(repo.repo).to.equal('project')
  })

  it('supports github:user/repo shorthand', function () {
    const repo = packageRepo(packages.github_shorthand)
    expect(repo.user).to.equal('shorty')
    expect(repo.repo).to.equal('handle')
  })

  it('supports bitbucket repos', function () {
    const repo = packageRepo(packages.bitbucket)
    expect(repo.user).to.equal('bitty')
    expect(repo.repo).to.equal('proyecto')
  })

  it('parses string input as a package.json filepath', function () {
    const repo = packageRepo('./test/fixtures/bitbucket.json')
    expect(repo.user).to.equal('bitty')
    expect(repo.repo).to.equal('proyecto')
  })
})
