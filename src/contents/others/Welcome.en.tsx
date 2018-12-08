import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <p>
      <TextHighlight>CSmoji</TextHighlight> is a free online course that teaches
      you <TextHighlight>Computer Science</TextHighlight> using{' '}
      <TextHighlight>emojis</TextHighlight>. <Emoji>😉</Emoji>
    </p>
    <p>
      Try our first lesson:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      .
    </p>
  </>
)
