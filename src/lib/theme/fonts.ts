export const allFonts = {
  sans: 'Lato, system-ui, sans-serif',
  mono: 'Menlo, monospace'
}

const fontsFn = (x: keyof typeof allFonts) => allFonts[x]

export default fontsFn
