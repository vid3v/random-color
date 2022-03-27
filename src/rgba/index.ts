import random from '../_lib/random/index'
import round from '../_lib/round/index'

/**
 * @name rgba
 * @summary Get a valid CSS rgba color specification.
 *
 * @description
 * Get a valid CSS rgba color specification.
 *
 * @example
 * const result = rgba()
 * //=> rgb(209, 34, 83, 0.2)
 */
export default function rgba(): string {
  const [red, green, blue, alpha] = [
    ...Array.from({ length: 3 }).map(() => random(0, 255)),
    round(random(0, 1, false), 2),
  ]

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
