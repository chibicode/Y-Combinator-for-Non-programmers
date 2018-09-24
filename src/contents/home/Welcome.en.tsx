import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <p>
      Welcome! At Hoshiai, <TextHighlight>non-programmers</TextHighlight> can
      learn how to think like Computer Scientists. Don't worry, there's{' '}
      <TextHighlight>no coding</TextHighlight> involved.
    </p>
    <p>
      Try our first lesson:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      . It's <TextHighlight>free</TextHighlight>.
    </p>
  </>
)
