import hex from '.'

describe('hex', () => {
  test('match hex color specification', () => {
    expect(hex()).toMatch(/^#([0-9A-F]){6}$/)
  })
})
