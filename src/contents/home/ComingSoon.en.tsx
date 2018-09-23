import { css } from 'emotion'
import { colors } from 'src/lib/theme'

export default () => (
  <p
    className={css`
      color: ${colors('grey500')};
    `}
  >
    More lessons coming soon. Leave your email below and we'll let you know!
  </p>
)
