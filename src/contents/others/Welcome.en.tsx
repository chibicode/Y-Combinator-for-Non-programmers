import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em> is a collection of free online books that teach you{' '}
      <Em>Computer Science</Em> using <Em>emojis</Em>. <Emoji>😉</Emoji>
    </P>
    <P>
      Try our first book for free:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      .
    </P>
  </>
)
