/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { colors, spaces, ns } from 'src/lib/theme'
import Container from 'src/components/Container'

const Modal = ({ children }: { children: React.ReactNode }) => (
  <section
    css={css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${colors('indigo30066')};
      z-index: 1;
      overflow-y: auto;
    `}
  >
    <Global
      styles={[
        css`
          body {
            overflow: hidden;
          }
        `
      ]}
    />
    <div
      css={css`
        padding: ${spaces(1)} 0;
        ${ns} {
          padding: ${spaces(2)} 0;
        }
      `}
    >
      <Container>{children}</Container>
    </div>
  </section>
)

export default Modal
