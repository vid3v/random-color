import { colors } from '../constants'
import name from '.'

describe('name', () => {
  test('must be a valid color name', () => {
    expect(colors).toContain(name())
  })
})
