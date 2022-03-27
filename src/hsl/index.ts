import random from '../_lib/random/index'

/**
 * @name hsl
 * @summary Get a valid CSS hsl color specification.
 *
 * @description
 * Get a valid CSS hsl color specification.
 *
 * @example
 * const result = hsl()
 * //=> hsl(312, 19%, 83%)
 */
export default function hsl(): string {
  const [hue, saturation, lightness] = [
    random(0, 360),
    ...Array.from({ length: 2 }).map(() => random(0, 100)),
  ]
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
