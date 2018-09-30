import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import NextLessonButton from 'src/components/NextLessonButton'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <P>
      <Strong>Imagine This</Strong>: You hired a personal chef. When you’re
      having dinner,{' '}
      <Em>every time you finish a dish, your chef brings you another dish</Em>.
    </P>
    <H3>Example</H3>
    <P>
      <Strong>Step 1:</Strong> Let’s say there are 3 dishes:{' '}
      <Em>
        sushi <Emoji>🍣</Emoji>, a sandwich <Emoji>🥪</Emoji>, and salad{' '}
        <Emoji>🥗</Emoji>
      </Em>
      .
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>Step 2:</Strong> Now, let’s say you want to eat{' '}
      <Em>
        sushi <Emoji>🍣</Emoji>
      </Em>
      .
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🍣</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>Step 3:</Strong> Your chef needs to bring another dish to replace
      sushi <Emoji>🍣</Emoji>. So he prepares{' '}
      <Em>
        steak <Emoji>🥩</Emoji>
      </Em>
      .
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>Step 4:</Strong> After you eat sushi <Emoji>🍣</Emoji>, your chef{' '}
      <Em>
        replaces sushi with steak <Emoji>🥩</Emoji>
      </Em>
      . So your dishes are now:{' '}
      <Em>
        steak <Emoji>🥩</Emoji>, a sandwich <Emoji>🥪</Emoji>, and salad{' '}
        <Emoji>🥗</Emoji>
      </Em>
      .
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <H3>Quiz</H3>
    <P>
      Suppose that the situation is like below (the chef is preparing{' '}
      <Em>tacos 🌮</Em>
      ):
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🌮</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>
        What will the <Em>dishes 🍽</Em> look like next?
      </Strong>{' '}
      Choose the correct one.
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 1 → <Emoji size="lg">🌮</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 2 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🌮</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 3 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🌮</Emoji>
      </UlLi>
    </Ul>
    <P>Go to the next episode to find out the answer!</P>
    <NextLessonButton
      href={yc(2)}
      primaryText={
        <>
          Check My Answer <Emoji>👋</Emoji>
        </>
      }
      secondaryText={<>Continue to Episode 2</>}
    />
  </>
)
