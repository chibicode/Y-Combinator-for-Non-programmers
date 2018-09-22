const allSpaces = {
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  64: 64,
  80: 80,
  96: 96,
  112: 112,
  128: 128,
  160: 160
}

const spaces = (x: keyof typeof allSpaces) => `${allSpaces[x]}px`

export default spaces
