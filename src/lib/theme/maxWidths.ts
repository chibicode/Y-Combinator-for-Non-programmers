const maxWidths = {
  1024: 1024
}

const maxWidthsFn = (x: keyof typeof maxWidths) => `${maxWidths[x]}px`

export default maxWidthsFn
