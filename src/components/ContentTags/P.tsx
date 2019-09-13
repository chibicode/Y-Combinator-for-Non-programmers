/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import locale from 'src/lib/locale'

type DefaultPProps = JSX.IntrinsicElements['p']
interface PProps extends DefaultPProps {
  t?: boolean
}

export const P = ({ t, ...props }: PProps) => (
  <p
    {...props}
    css={[
      css`
        margin: 0 0 ${spaces(1)};
      `,
      !t &&
        locale === 'en' &&
        css`
          opacity: 0.1;
        `
    ]}
  />
)
