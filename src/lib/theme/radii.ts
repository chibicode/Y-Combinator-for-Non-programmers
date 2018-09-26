export const allRadii = {
  0.25: '0.25rem',
  9999: '9999px'
}

const radii = (x: keyof typeof allRadii) => allRadii[x]

export default radii
