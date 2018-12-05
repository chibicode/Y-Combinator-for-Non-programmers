import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <p>
      Welcome! <Emoji>👋</Emoji> At CSmoji, you can learn Computer Science using{' '}
      <TextHighlight>emojis</TextHighlight>. <Emoji>😉</Emoji>
    </p>
    <p>
      Try our first lesson:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      . It's <TextHighlight>free</TextHighlight>. <Emoji>👍</Emoji>
    </p>
  </>
)
