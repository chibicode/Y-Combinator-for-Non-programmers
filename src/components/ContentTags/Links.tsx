import { css, cx } from 'emotion'
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

export const ExternalLink: React.FunctionComponent<JSX.IntrinsicElements['a']> = ({
  className,
  ...props
}) => <a {...props} className={cx(commonLinkClass, className)} />

// NOTE: Can't use <ExternalLink> as a child of <Link> - the child of <Link> must be <a>
export const InternalLink: React.FunctionComponent<JSX.IntrinsicElements['a']> = ({
  href,
  className,
  ...props
}) => (
  <Link href={href}>
    <a {...props} className={cx(commonLinkClass, className)} />
  </Link>
)
