/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const stripHeader = require('../../stripHeader')

describe('Strip headers', () => {
  it('should give default value if not found', () => {
    const headers = {}
    expect(stripHeader(headers.referer)).to.equal('-')
  })

  it('should find value', () => {
    const headers = {
      referer: '//example.com'
    }

    expect(stripHeader(headers.referer)).to.equal('//example.com')
  })

  it('should find value and stripped query string', () => {
    const headers = {
      referer: '//example.com?sample=true'
    }

    expect(stripHeader(headers.referer)).to.equal('//example.com')
  })
})
