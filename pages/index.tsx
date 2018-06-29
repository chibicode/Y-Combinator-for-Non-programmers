import { injectGlobal } from 'emotion'
import { Container, Heading, Provider } from 'rebass/emotion'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default () => (
  <Provider>
    <Container pt={4}>
      <Heading>Hello World!</Heading>
    </Container>
  </Provider>
)
