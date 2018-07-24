import { Provider } from 'rebass/emotion'
import theme from 'src/lib/theme'

const ThemeProvider: React.SFC<{ children: React.ReactNode }> = ({
  children,
}) => <Provider theme={theme}>{children}</Provider>

export default ThemeProvider
