'use strict'

const strip = require('../../strip')

describe('Strip', () => {
  it('should give same output as input if token not found', () => {
    const input = 'test'
    expect(strip(input, 'x')).toBe(input)
  })

  it('should strip right part if token found', () => {
    const input = 'test-example'
    expect(strip(input, '-')).toBe('test')
  })
})
