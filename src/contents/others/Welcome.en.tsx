import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em> is a free online course that teaches you{' '}
      <Em>Computer Science</Em> using <Em>emojis</Em>. <Emoji>😉</Emoji>
    </P>
    <P>
      Try our first lesson:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      .
    </P>
  </>
)
