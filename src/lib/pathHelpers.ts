export const yc = (params?: string | number) =>
  `/yc${params ? `/${params}` : ''}`

export default { yc }
