import React from 'react'
import { Em, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'

export default () => (
  <>
    <P>
      <Strong>Imagine This</Strong>: You’re always hungry. So you hired your
      personal chef. And you told him:{' '}
      <Em>“Every time I finish a dish, bring me another dish!”</Em>
    </P>
    <P>
      <Strong>Example:</Strong> Let’s say there are 3 dishes: Sushi, Sandwich,
      and Salad.
    </P>
    <Ul>
      <UlLi>
        <Strong>Dishes:</Strong> <Emoji>🍣</Emoji> <Emoji>🥪</Emoji>{' '}
        <Emoji>🥗</Emoji>
      </UlLi>
    </Ul>
  </>
)
