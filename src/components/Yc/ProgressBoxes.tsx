/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import FlexCenter from 'src/components/FlexCenter'
import {
  advancedColor,
  advancedColorLight,
  beginnerColor,
  beginnerColorLight,
  intermediateColor,
  intermediateColorLight
} from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, radii } from 'src/lib/theme'
import {
  numAdvancedLevels,
  numBeginnerLevels,
  numIntermediateLevels
} from 'src/lib/yc/numEpisodesForEachLevel'

interface ProgressBoxesProps {
  currentEpisode: number
}

const Box: React.FunctionComponent<{
  children: React.ReactNode
  highlight: boolean
  color: string
  lightColor: string
  wide: boolean
  borderRight?: boolean
}> = ({ children, highlight, color, lightColor, wide, borderRight }) => (
  <FlexCenter
    css={[
      css`
        height: 1.2rem;
      `,
      highlight
        ? css`
            background: ${color};
            color: ${colors('white')};
          `
        : css`
            background: ${lightColor};
            color: ${colors('grey400')};
          `,
      borderRight &&
        css`
          border-right: 2px solid ${colors('grey700')};
        `,
      wide
        ? css`
            width: 1.1rem;
          `
        : css`
            width: 0.85rem;
          `
    ]}
  >
    {children}
  </FlexCenter>
)

const shouldHighlightBeginner = (currentEpisode: number, i: number) =>
  currentEpisode - 1 >= i
const shouldHighlightIntermediate = (currentEpisode: number, i: number) =>
  currentEpisode - numBeginnerLevels >= i
const shouldHighlightAdvanced = (currentEpisode: number, i: number) =>
  currentEpisode - numIntermediateLevels - numBeginnerLevels >= i

const shouldBorderBeginner = (currentEpisode: number, i: number) =>
  currentEpisode - 1 === i
const shouldBorderIntermediate = (currentEpisode: number, i: number) =>
  currentEpisode - numBeginnerLevels === i
const shouldBorderAdvanced = (currentEpisode: number, i: number) =>
  currentEpisode - numIntermediateLevels - numBeginnerLevels >= i

const ProgressBoxes: React.FunctionComponent<ProgressBoxesProps> = ({
  currentEpisode
}) => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: middle;
      font-size: ${fontSizes(0.7)};
      border-radius: ${radii(0.5)};
      border: 2px solid ${colors('grey700')};
      font-weight: bold;
      line-height: ${lineHeights(1, { ignoreLocale: true })};
      overflow: hidden;
    `}
  >
    {Array.from({ length: numBeginnerLevels }).map((_, i) => (
      <Box
        key={`beginner${i}`}
        highlight={shouldHighlightBeginner(currentEpisode, i)}
        borderRight={shouldBorderBeginner(currentEpisode, i)}
        color={beginnerColor}
        lightColor={beginnerColorLight}
        wide={i === 0}
      >
        {i === 0 && (locale === 'jp' ? '初' : 'B')}
        {i + 1}
      </Box>
    ))}
    {Array.from({ length: numIntermediateLevels }).map((_, i) => (
      <Box
        key={`intermediate${i}`}
        highlight={shouldHighlightIntermediate(currentEpisode, i)}
        borderRight={shouldBorderIntermediate(currentEpisode, i)}
        color={intermediateColor}
        lightColor={intermediateColorLight}
        wide={i === 0}
      >
        {i === 0 && (locale === 'jp' ? '中' : 'I')}
        {i + 1}
      </Box>
    ))}
    {Array.from({ length: numAdvancedLevels }).map((_, i) => (
      <Box
        key={`advanced${i}`}
        highlight={shouldHighlightAdvanced(currentEpisode, i)}
        borderRight={shouldBorderAdvanced(currentEpisode, i)}
        color={advancedColor}
        wide={i === 0}
        lightColor={advancedColorLight}
      >
        {i === 0 && (locale === 'jp' ? '上' : 'A')}
        {i + 1}
      </Box>
    ))}
  </span>
)

export default ProgressBoxes
