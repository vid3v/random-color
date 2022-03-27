import hsl from '.'

describe('hsl', () => {
  test('match hsl color specification', () => {
    expect(hsl()).toMatch(
      /^hsl\(([0-2]?[0-9][0-9]?|3[0-5][0-9]|360), ([0-9]|[0-9][0-9]|100)%, ([0-9]|[0-9][0-9]|100)%\)$/
    )
  })
})
