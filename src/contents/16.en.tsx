import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Bold, Highlight, Italic } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'

export const WhatIsComputer = () => (
  <>
    <P>
      <Bold>
        Before we talk about computer science, let’s ask ourselves this
        question:
      </Bold>{' '}
      <Italic>“What is a computer?”</Italic>
    </P>
    <EmojiSeparator
      emojis={['🤔', '💻', '❓']}
      description={<>What is a computer?</>}
    />
    <P>
      If you see the word “computer”, you might think about:{' '}
      <Italic>a desktop/laptop computer, smartphone, or even a robot.</Italic>
    </P>
    <EmojiSeparator emojis={['💻', '📱', '🤖']} />
    <P>
      <Bold>However:</Bold>{' '}
      <Highlight>
        A computer, at its core, is a <Bold>computing device</Bold>. It’s a
        device that can <Italic>compute</Italic>.
      </Highlight>
    </P>
    <EmojiSeparator
      emojis={['➕', '✖️', '💻', '➖', '➗']}
      description={
        <>
          A computer, at its core, is a<br />
          <Bold>computing device</Bold>.
        </>
      }
    />
    <P>
      Computers can search for information quickly, draw beautiful graphics,
      recognize faces, or have conversations with humans.{' '}
    </P>
    <P>
      <Bold>
        This is possible because computers can do a large amount of computations
        very quickly:
      </Bold>{' '}
      Search engines do a lot of computations to rank search results. Face
      recognition engines do a lot of computations to process image data.
    </P>
    <EmojiSeparator
      emojis={['🔢', '🔢', '💻', '🔢', '🔢']}
      description={
        <>
          Computers can do a large amount of
          <br />
          computations very quickly
        </>
      }
    />
    <P>
      This is why a computer, at its core, is a <Bold>computing device.</Bold>
    </P>
  </>
)

export default () => <EpisodeCardList underConstruction cards={[]} />
