import { Provider } from 'rebass/emotion'
import colors from '../lib/colors'
import fonts from '../lib/fonts'
import space from '../lib/space'

const ThemeProvider: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Provider
    theme={{
      colors,
      fonts,
      space
    }}
  >
    {children}
  </Provider>
)

export default ThemeProvider
