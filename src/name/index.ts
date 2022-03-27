import { colors } from '../constants/index'
import random from '../_lib/random/index'

/**
 * @name name
 * @summary Get a valid CSS color name.
 *
 * @description
 * Get a valid CSS color name.
 *
 * @example
 * const result = name()
 * //=> red
 */
export default function name(): string {
  return colors[random(0, colors.length - 1)]
}
