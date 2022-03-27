import hsla from '.'

describe('hsla', () => {
  test('match hsla color specification', () => {
    expect(hsla()).toMatch(
      /^hsla\(([0-2]?[0-9][0-9]?|3[0-5][0-9]|360), ([0-9]|[0-9][0-9]|100)%, ([0-9]|[0-9][0-9]|100)%, (0[.])?[0-9]{0,2}\)$/
    )
  })
})
