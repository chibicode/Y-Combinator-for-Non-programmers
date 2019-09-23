/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import React from 'react'
import modernNormalize from 'src/lib/modernNormalize'
import { colors, lineHeights, ns } from 'src/lib/theme'
import locale from 'src/lib/locale'

const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
  return (
    <div>
      {/* NOTE: For some reason, if this Global component appears AFTER {children},
    then there's a moment where the styles are not applied. */}
      <Global
        styles={[
          modernNormalize,
          css`
            html {
              font-size: 18px;
              color: ${colors('grey900')};
              line-height: ${lineHeights(1.5)};
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
              font-family: ${locale === 'en' ? 'Lato,' : ''}-apple-system,
                BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
                'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
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
              line-height: inherit;
            }
          `
        ]}
      />
      {children}
    </div>
  )
}

export default GlobalStyles
