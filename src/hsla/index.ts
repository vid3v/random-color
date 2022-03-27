import random from '../_lib/random/index'
import round from '../_lib/round/index'

/**
 * @name hsla
 * @summary Get a valid CSS hsla color specification.
 *
 * @description
 * Get a valid CSS hsla color specification.
 *
 * @example
 * const result = hsla()
 * //=> hsl(312, 19%, 83%, 0.8)
 */
export default function hsla(): string {
  const [hue, saturation, lightness, alpha] = [
    random(0, 360),
    ...Array.from({ length: 2 }).map(() => random(0, 100)),
    round(random(0, 1, false), 2),
  ]
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}
