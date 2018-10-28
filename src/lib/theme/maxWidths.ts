export const allMaxWidths = {
  xxs: (1080 / 12) * 4,
  xs: (1080 / 12) * 6,
  sm: (1080 / 12) * 9,
  md: (1080 / 12) * 10,
  lg: 1080
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
