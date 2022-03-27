import random from '.'

describe('random', () => {
  test('must be less than 10', () => {
    expect(random(0, 10)).toBeLessThan(10)
  })

  test('must be great or equal to 10', () => {
    expect(random(10, 15)).toBeGreaterThanOrEqual(10)
  })
})
