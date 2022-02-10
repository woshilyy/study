const { expect } = require('@jest/globals')
const sum = require('./sum')

test('adds1+2', () => {
  expect(sum(1,2)).toBe(3)
})