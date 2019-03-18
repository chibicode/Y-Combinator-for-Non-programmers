/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import { colors } from 'src/lib/theme'
export const jsxBabelFix = jsx

export const commonLinkClass = css`
  &:hover {
    background-color: ${colors('pink50')};
  }

  &:active {
    background-color: ${colors('pink50')};
  }
`

export const ExternalLink = (props: JSX.IntrinsicElements['a']) => (
  <a {...props} css={commonLinkClass} />
)

// NOTE: Can't use <ExternalLink> as a child of <Link> - the child of <Link> must be <a>
// NOTE: passHref is necessary if you use emotion
export const InternalLink = ({
  href,
  ...props
}: JSX.IntrinsicElements['a']) => (
  <Link href={href} passHref>
    <a {...props} css={commonLinkClass} />
  </Link>
)
