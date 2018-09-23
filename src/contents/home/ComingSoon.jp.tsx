import { css } from 'emotion'
import { colors } from 'src/lib/theme'

export default () => (
  <p
    className={css`
      color: ${colors('grey500')};
    `}
  >
    まだまだあるよ
  </p>
)
