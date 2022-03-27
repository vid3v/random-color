declare module '@vid3v/random-color' {
  function name(): string
  namespace name {}

  function rgb(): string
  namespace rgb {}

  function rgba(): string
  namespace rgba {}

  function hsl(): string
  namespace hsl {}

  function hsla(): string
  namespace hsla {}

  function hex(): string
  namespace hex {}

  const colors: string[]
  namespace colors {}
}

declare module '@vid3v/random-color/name' {
  import { name } from '@vid3v/random-color'
  export default name
}

declare module '@vid3v/random-color/rgb' {
  import { rgb } from '@vid3v/random-color'
  export default rgb
}

declare module '@vid3v/random-color/rgba' {
  import { rgba } from '@vid3v/random-color'
  export default rgba
}

declare module '@vid3v/random-color/hsl' {
  import { hsl } from '@vid3v/random-color'
  export default hsl
}

declare module '@vid3v/random-color/hsla' {
  import { hsla } from '@vid3v/random-color'
  export default hsla
}

declare module '@vid3v/random-color/hex' {
  import { hex } from '@vid3v/random-color'
  export default hex
}
