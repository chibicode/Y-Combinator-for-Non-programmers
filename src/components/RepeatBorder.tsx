/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import { zIndices, colors, fontSizes, spaces } from 'src/lib/theme'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import EmojiNumber from 'src/components/EmojiNumber'

export interface ConditionalBorderProps {
  begin: number
  end?: number
  variableSizeOverrides?: ExpressionRunnerContextProps['variableSize']
}

const fontSize = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): string => {
  if (variableSize === 'lg') {
    return fontSizes(1.2)
  } else if (variableSize === 'md') {
    return fontSizes(1)
  } else {
    return fontSizes(0.85)
  }
}

const width = (
  variableSize: ExpressionRunnerContextProps['variableSize']
): number => {
  if (variableSize === 'lg') {
    return 2.1
  } else if (variableSize === 'md') {
    return 0.9
  } else {
    return 0.8
  }
}

const RepeatBorder = ({
  begin,
  end,
  variableSizeOverrides
}: ConditionalBorderProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorderShade')};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      />
      <span
        css={css`
          position: absolute;
          z-index: ${zIndices('badge')};
          top: 0.35em;
          left: 0.3em;
          display: inline-flex;
          flex-direction: column;
          font-size: ${fontSize(variableSizeOverrides || variableSize)};
        `}
      >
        <EmojiNumber number={begin} />
        {end && (
          <>
            <span
              css={css`
                margin-top: ${spaces(0.125)};
                display: inline-block;
              `}
            >
              <Emoji>⬇️</Emoji>
            </span>
            <span
              css={css`
                margin-top: ${spaces(0.125)};
                display: inline-block;
              `}
            >
              <EmojiNumber number={end} />
            </span>
          </>
        )}
      </span>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorder')};
          top: 0;
          left: 0;
          bottom: 0;
          width: ${width(variableSize)}em;
          background: ${colors('purple100')};
          border-left: 2px solid ${colors('indigo300')};
          border-right: 2px solid ${colors('indigo300')};
          border-top: 2px solid ${colors('indigo300')};
        `}
      />
    </>
  )
}

export default RepeatBorder
