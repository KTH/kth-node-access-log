'use strict'

const test = require('tape')
const stripHeader = require('../../stripHeader')

test('default value if not found', (assert) => {
  const headers = {}
  assert.equal(stripHeader(headers.referer), '-')
  assert.end()
})

test('found value', (assert) => {
  const headers = {
    referer: '//example.com'
  }

  assert.equal(stripHeader(headers.referer), '//example.com')
  assert.end()
})

test('found value and stripped query string', (assert) => {
  const headers = {
    referer: '//example.com?sample=true'
  }

  assert.equal(stripHeader(headers.referer), '//example.com')
  assert.end()
})
