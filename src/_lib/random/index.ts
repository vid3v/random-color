export default function random(
  min: number,
  max: number,
  rounded?: boolean
): number {
  const value = Math.random() * (max - min) + min
  return typeof rounded === 'undefined' || rounded ? Math.floor(value) : value
}
