import { Provider } from 'rebass/emotion'
import colors from '../lib/colors'

const ThemeProvider: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Provider
    theme={{
      colors
    }}
  >
    {children}
  </Provider>
)

export default ThemeProvider
