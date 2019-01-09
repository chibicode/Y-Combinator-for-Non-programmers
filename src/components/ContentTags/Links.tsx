/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import Link from 'next/link'
import React from 'react'
import { colors } from 'src/lib/theme'

const commonLinkClass = css`
  &:hover {
    background-color: ${colors('pink50')};
  }

  &:active {
    background-color: ${colors('pink50')};
  }
`

export const ExternalLink: React.FC<
  JSX.IntrinsicElements['a']
> = ({ ...props }) => <a {...props} css={commonLinkClass} />

// NOTE: Can't use <ExternalLink> as a child of <Link> - the child of <Link> must be <a>
// NOTE: passHref is necessary if you use emotion
export const InternalLink: React.FC<
  JSX.IntrinsicElements['a']
> = ({ href, ...props }) => (
  <Link href={href} passHref>
    <a {...props} css={commonLinkClass} />
  </Link>
)
