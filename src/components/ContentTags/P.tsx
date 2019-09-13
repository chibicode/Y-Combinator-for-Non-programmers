/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import locale from 'src/lib/locale'

type DefaultPProps = JSX.IntrinsicElements['p']
interface PProps extends DefaultPProps {
  t8d?: boolean
}

export const P = ({ t8d, ...props }: PProps) => (
  <p
    {...props}
    css={[
      css`
        margin: 0 0 ${spaces(1)};
      `,
      !t8d &&
        locale === 'en' &&
        css`
          opacity: 0.1;
        `
    ]}
  />
)
