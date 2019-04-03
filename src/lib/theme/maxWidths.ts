export const allMaxWidths = {
  xxxs: (1104 / 12) * 2,
  xxs: (1104 / 12) * 4,
  xs: (1104 / 12) * 6,
  sm: (1104 / 12) * 9,
  md: (1104 / 12) * 10,
  lg: 1104
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
