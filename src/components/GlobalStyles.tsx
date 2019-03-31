/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import 'modern-normalize'
import React from 'react'
import { colors, lineHeights, spaces } from 'src/lib/theme'
import ns from 'src/lib/theme/ns'
const pink = colors('pink500')

const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
  return (
    <div
      css={css`
        padding-bottom: ${spaces(6)};
      `}
    >
      {/* NOTE: For some reason, if this Global component appears AFTER {children},
    then there's a moment where the styles are not applied. */}
      <Global
        styles={css`
          /* NOTE:
     double-tap optimization was removed: https://github.com/twbs/bootstrap/commit/2e15b9488874d8c129e6bd4da0425ecbac359c03 */
          html {
            font-size: 18px;
            color: ${colors('grey800')};
            line-height: ${lineHeights(1.5)};
            touch-action: manipulation;
          }

          body {
            margin: 0;
          }

          html,
          body,
          input,
          textarea,
          select,
          button {
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
              'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
              sans-serif;
          }

          ${ns} {
            html {
              /* NOTE: BorderWrapper background image size can be 1.5rem, so if this is not even
         they won't be able to repeat correctly. */
              font-size: 22px;
            }
          }

          a {
            color: inherit;
          }

          strong {
            font-weight: bold; /* Instead of bolder */
          }

          svg {
            height: 100%;
            width: auto;
          }

          button {
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
            font-size: inherit;
          }

          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${pink};

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${pink}, 0 0 5px ${pink};
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}
      />
      {children}
    </div>
  )
}

export default GlobalStyles
