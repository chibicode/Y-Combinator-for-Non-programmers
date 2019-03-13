import React from 'react'
import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em> is a collection of free interactive textbooks that teach
      you <Em>Computer Science</Em> using <Em>emojis</Em>. <Emoji>😉</Emoji>
    </P>
    <P>
      <Em>There’s no coding involved,</Em> so it’s great for non-programmers.{' '}
      <Emoji>👍</Emoji>
    </P>
    <P>
      Try our first textbook for free:{' '}
      <HomeLink linkProps={{ href: yc() }}>
        Y Combinator for Non-Programmers
      </HomeLink>
      .
    </P>
  </>
)
