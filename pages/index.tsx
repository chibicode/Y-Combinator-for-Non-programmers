import { injectGlobal } from 'emotion'
import { Heading, Provider } from 'rebass/emotion'

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
  <div>
    <Provider>
      <Heading>Hello World!</Heading>
    </Provider>
  </div>
)
