/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const ratioToPercent = (width: number, height: number) => (height / width) * 100

const EmbedResponsive = ({
  children,
  width,
  height
}: {
  children: React.ReactNode
  width: number
  height: number
}) => (
  <div
    css={css`
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;

      &::before {
        display: block;
        content: '';
        padding-top: ${ratioToPercent(width, height)}%;
      }

      & * {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}
  >
    {children}
  </div>
)

export default EmbedResponsive
