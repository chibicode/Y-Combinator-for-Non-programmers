/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { H3 } from 'src/components/ContentTags'
import { radii, spaces } from 'src/lib/theme'

interface SideNoteProps {
  heading?: React.ReactNode
  headingNoMarginBottom?: boolean
  noPaddingBottom?: boolean
  children: React.ReactNode
  color: 'indigo' | 'pink' | 'yellow'
}

const SideNoteSection = ({
  children,
  heading,
  headingNoMarginBottom,
  noPaddingBottom
}: SideNoteProps) => (
  <div
    css={[
      css`
        padding-top: ${spaces(0.75)};
        padding-left: ${spaces(1)};
        padding-right: ${spaces(1)};
        margin: 1.5rem 0;
        border-radius: ${radii(0.25)};
      `,
      !noPaddingBottom &&
        css`
          padding-bottom: ${spaces(0.75)};
        `
    ]}
  >
    {heading && (
      <H3
        css={css`
          text-align: center;
          margin: 0 0 ${headingNoMarginBottom ? 0 : spaces(1)};
        `}
      >
        {heading}
      </H3>
    )}
    {children}
  </div>
)

export default SideNoteSection
