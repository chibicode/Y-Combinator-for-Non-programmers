import { injectGlobal } from 'emotion'
import { Container, Provider } from 'rebass/emotion'
import FunctionCall from '../components/FunctionCall'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Index: React.SFC<{}> = () => (
  <Provider>
    <Container pt={4}>
      <FunctionCall />
    </Container>
  </Provider>
)

export default Index
