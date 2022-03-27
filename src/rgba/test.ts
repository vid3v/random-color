import rgba from '.'

describe('rgba', () => {
  test('match rgba color specification', () => {
    expect(rgba()).toMatch(
      /^rgba\(([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), (0[.])?[0-9]{0,2}\)$/
    )
  })
})
