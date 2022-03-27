import random from '../_lib/random/index'

/**
 * @name rgb
 * @summary Get a valid CSS rgb color specification.
 *
 * @description
 * Get a valid CSS rgb color specification.
 *
 * @example
 * const result = rgb()
 * //=> rgb(209, 34, 83)
 */
export default function rgb(): string {
  const [red, green, blue] = Array.from({ length: 3 }).map(() => random(0, 255))
  return `rgb(${red}, ${green}, ${blue})`
}
