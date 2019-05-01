/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { colors, fontSizes, spaces, radii } from 'src/lib/theme'

export interface EpisodePageNavbarProps {
  cssOverrides?: SerializedStyles
  leftContent: React.ReactNode
  centerContent?: React.ReactNode
  rightContent: React.ReactNode
}

export const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('grey600')};
  font-weight: bold;
  font-size: ${fontSizes(0.75)};
  background: none;
  border: none;
  border-radius: ${radii(0.5)};
  padding: ${spaces(0.25)} ${spaces(0.5)};
  margin: ${spaces('-0.5')};
  cursor: pointer;
  display: inline-block;

  &:hover,
  &:active {
    background-color: ${colors('indigo50')};
  }
`

const EpisodePageNavbar = ({
  cssOverrides,
  leftContent,
  centerContent,
  rightContent
}: EpisodePageNavbarProps) => {
  return (
    <div
      css={[
        css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${spaces(0.5)} 0;
        `,
        cssOverrides
      ]}
    >
      <div
        css={css`
          width: ${centerContent ? 35 : 50}%;
          text-align: left;
        `}
      >
        {leftContent}
      </div>
      <div
        css={css`
          width: 27%;
          text-align: center;
        `}
      >
        {centerContent}
      </div>
      <div
        css={css`
          width: ${centerContent ? 35 : 50}%;
          text-align: right;
        `}
      >
        {rightContent}
      </div>
    </div>
  )
}

export default EpisodePageNavbar
