import round from '.'

describe('round', () => {
  test('must be 2 digits fractions', () => {
    expect(round(0.9324)).toBeCloseTo(0.93, 2)
  })

  test('must be 3 digits fractions', () => {
    expect(round(10.9342, 3)).toBeCloseTo(10.934, 3)
  })
})
