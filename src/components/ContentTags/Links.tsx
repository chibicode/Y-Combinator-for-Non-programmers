/** @jsx jsx */
import { css, jsx } from '@emotion/core'
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

export const ExternalLink: React.FunctionComponent<
  JSX.IntrinsicElements['a']
> = ({ ...props }) => <a {...props} css={commonLinkClass} />

// NOTE: Can't use <ExternalLink> as a child of <Link> - the child of <Link> must be <a>
export const InternalLink: React.FunctionComponent<
  JSX.IntrinsicElements['a']
> = ({ href, ...props }) => (
  <Link href={href}>
    <a {...props} css={commonLinkClass} />
  </Link>
)
