import { css } from 'emotion'
import Link from 'next/link'
import React from 'react'
import { colors, fontSizes, spaces } from 'src/lib/theme'

interface NextLessonButtonProps {
  Component?: React.ComponentType | string
}

const NextLessonButton: React.SFC<NextLessonButtonProps> = ({
  children,
  Component = 'div'
}) => (
  <Component
    className={css`
      text-align: center;
      margin: ${spaces(3)} 0;
    `}
  >
    <Link href="/">
      <a
        className={css`
          font-size: ${fontSizes(1.25)};
          padding: ${spaces(0.75)} ${spaces(1.25)};
          border-radius: 9999px;
          border: 2px solid ${colors('pink700')};
          background: ${colors('pink400')};
          color: #fff;
          font-weight: bold;
          text-decoration: none;
          &:focus {
            box-shadow: 0 0 0 1pt ${colors('pink700')};
            outline: none;
          }
        `}
      >
        {children}
      </a>
    </Link>
  </Component>
)

export default NextLessonButton
