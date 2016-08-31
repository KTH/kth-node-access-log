'use strict'

const test = require('tape')
const strip = require('../../strip')

test('same as input if token not found', (assert) => {
  const input = 'test'
  assert.equal(strip(input, 'x'), input)
  assert.end()
})

test('strip right part if token found', (assert) => {
  const input = 'test-example'
  assert.equal(strip(input, '-'), 'test')
  assert.end()
})
