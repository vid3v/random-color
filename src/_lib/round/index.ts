export default function round(value: number, digits?: number): number {
  digits = typeof digits === 'undefined' ? 2 : digits
  const x = Math.pow(10, digits)
  return Math.round(value * x) / x
}
