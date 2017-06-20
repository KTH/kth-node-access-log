/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const strip = require('../../strip')

describe('Strip', () => {
  it('should give same output as input if token not found', () => {
    const input = 'test'
    expect(strip(input, 'x')).to.be.equal(input)
  })

  it('should strip right part if token found', () => {
    const input = 'test-example'
    expect(strip(input, '-')).to.be.equal('test')
  })
})
