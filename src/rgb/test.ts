import rgb from '.'

describe('rgb', () => {
  test('match rgb color specification', () => {
    expect(rgb()).toMatch(
      /^rgb\(([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\)$/
    )
  })
})
