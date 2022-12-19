/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { colors, fontSizes, spaces, radii } from 'src/lib/theme'
import locale from 'src/lib/locale'

export interface EpisodePageNavbarProps {
  leftContent: React.ReactNode
  centerContent?: React.ReactNode
  rightContent: React.ReactNode
}

export const navigationLinkClasses = (isBottom?: boolean) => css`
  text-decoration: none;
  color: ${colors('grey800')};
  font-weight: bold;
  font-size: ${fontSizes(locale === 'jp' ? 0.85 : 0.8)};
  background: none;
  border: none;
  border-radius: ${radii(0.5)};
  padding: ${spaces(0.25)} ${spaces(0.375)};
  margin: ${spaces('-0.5')};
  cursor: pointer;
  display: inline-block;

  &:hover,
  &:active {
    background-color: ${isBottom ? colors('indigo50') : colors('white')};
  }
`

const EpisodePageNavbar = ({
  leftContent,
  centerContent,
  rightContent
}: EpisodePageNavbarProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${spaces(0.5)} 0;
      `}
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
