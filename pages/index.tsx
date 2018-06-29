import { injectGlobal } from 'emotion'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default () => <div>Hello World!</div>
