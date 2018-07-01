import { Provider } from 'rebass/emotion'
import colors from '../lib/colors'
import fonts from '../lib/fonts'

const ThemeProvider: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Provider
    theme={{
      colors,
      fonts
    }}
  >
    {children}
  </Provider>
)

export default ThemeProvider
