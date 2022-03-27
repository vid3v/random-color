import random from '../_lib/random/index'

/**
 * @name hex
 * @summary Get a valid CSS hex color specification.
 *
 * @description
 * Get a valid CSS hex color specification.
 *
 * @example
 * const result = hex()
 * //=> #32F82A
 */
export default function hex(): string {
  const hexadecimal = '0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F'.split('_')
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += hexadecimal[random(0, 16)]
  }

  return color
}
