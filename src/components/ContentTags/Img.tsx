/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Img = ({
  size,
  alt,
  ...props
}: JSX.IntrinsicElements['img'] & {
  size?: 'small'
}) => (
  <img
    {...props}
    alt={alt}
    css={
      size === 'small'
        ? css`
            max-width: 200px;
            width: 100%;
            margin: 0 auto;
            display: block;
          `
        : css`
            max-width: 100%;
          `
    }
  />
)

export default Img
