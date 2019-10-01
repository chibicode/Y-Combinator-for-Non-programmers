export const allMaxWidths = {
  xxxs: (1140 / 12) * 2,
  xxs: (1140 / 12) * 4,
  xsxs: (1140 / 12) * 5,
  xs: (1140 / 12) * 6,
  smsm: (1140 / 12) * 8,
  sm: (1140 / 12) * 9,
  md: (1140 / 12) * 10,
  lg: 1140
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
