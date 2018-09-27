import { css } from 'emotion'
import Link, { LinkState } from 'next/link'
import React from 'react'
import { colors, fontWeights } from 'src/lib/theme'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface HomeLink {
  linkProps: Omit<LinkState, 'children'>
  anchorProps?: React.HTMLAttributes<HTMLAnchorElement>
  children: React.ReactNode
}

const HomeLink: React.SFC<HomeLink> = ({
  children,
  linkProps,
  anchorProps
}) => (
  <Link {...linkProps}>
    <a
      {...anchorProps}
      className={css`
        font-weight: ${fontWeights(800)};
        color: ${colors('pink400')};
        text-decoration: underline;

        &:hover,
        &:active {
          background: ${colors('yellow200')};
        }
      `}
    >
      {children}
    </a>
  </Link>
)

export default HomeLink
