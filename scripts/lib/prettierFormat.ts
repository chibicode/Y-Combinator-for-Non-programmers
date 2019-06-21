import { format } from 'prettier'

const prettierFormat = (s: string) =>
  format(s, { semi: false, singleQuote: true, parser: 'typescript' })

export default prettierFormat
