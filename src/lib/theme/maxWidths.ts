const allMaxWidths = {
  sm: (1024 / 12) * 9,
  md: (1024 / 12) * 10,
  lg: 1024
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
