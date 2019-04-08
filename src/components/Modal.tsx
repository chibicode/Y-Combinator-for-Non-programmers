/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { zIndices, colors, spaces, ns } from 'src/lib/theme'
import Container from 'src/components/Container'
import { useRef } from 'react'

const Modal = ({
  children,
  onClickBackground
}: {
  children: React.ReactNode
  onClickBackground: () => void
}) => {
  const sectionEl = useRef(null)
  const onClick: React.MouseEventHandler = e => {
    if (e.target === sectionEl.current) {
      onClickBackground()
    }
  }
  return (
    <section
      css={css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${colors('indigo30066')};
        z-index: ${zIndices('modal')};
        overflow-y: auto;
        padding: ${spaces(1)} 0;
        ${ns} {
          padding: ${spaces(2)} 0;
        }
      `}
      ref={sectionEl}
      onClick={onClick}
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
      <Container>{children}</Container>
    </section>
  )
}

export default Modal
