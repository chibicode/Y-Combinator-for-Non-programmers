import {
  Blockquote,
  Em,
  ExternalLink,
  Hr,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <>
    <P>
      <Strong>Question:</Strong> Which of the following is/are the correct
      description(s) of the term{' '}
      <Strong>
        <Em>“Y Combinator”</Em>
      </Strong>
      ?
    </P>
    <Ol>
      <OlLi>
        Y Combinator is <Em>a startup accelerator</Em>. It was an early investor
        for companies like Dropbox and AirBnB.
      </OlLi>
      <OlLi>
        Y Combinator is <Em>a way to define recursive functions</Em>.
      </OlLi>
      <OlLi>
        Y Combinator is <Em>a fixed-point combinator</Em>.
      </OlLi>
    </Ol>
    <Hr />
    <P>
      <Strong>
        Answer: <Em>1, 2, and 3 are all correct</Em>.
      </Strong>
    </P>
    <Ul>
      <UlLi>
        <Strong>If you’re in the tech industry:</Strong> You might know that Y
        Combinator is a startup accelerator (choice 1). But{' '}
        <Em>
          did you know that Y Combinator (the startup accelerator) is actually
          named after a cool concept in Computer Science
        </Em>{' '}
        (choices 2 and 3)? If you didn’t know that, I think you’ll like this
        article.
      </UlLi>
      <UlLi>
        <Strong>If you’re a programmer:</Strong> You might know that Y
        Combinator (in programming) is some kind of a functional programming
        concept. But{' '}
        <Em>
          can you explain what Y Combinator (in programming) is to a
          non-programmer
        </Em>
        ? If you can’t, I think you’ll like this article. Of couse, if you’re a
        programmer who don't know much about Y Combinator (in programming), I
        think you’ll like this article as well.
      </UlLi>
      <UlLi>
        <Strong>If you’ve never heard of the term “Y Combinator”:</Strong>{' '}
        That’s great! <Em>I’m writing this article for someone like you.</Em> If
        you’re interested in learning about a very cool concept in Computer
        Science, I think you’ll like this article. Don’t worry:{' '}
        <Em>there won't be any coding involved</Em>.
      </UlLi>
    </Ul>
    <EmojiSeparator emojis={['😉', '👍', '❤️']} />
    <P>
      <Strong>Before we begin, here’s some backstory:</Strong> In 2005, a group
      of successful entrepreneurs started training (and investing in) young
      startup founders. This startup “accelerator” became known as “Y
      Combinator”.{' '}
      <ExternalLink href="http://www.ycombinator.com/press/">
        As of writing (Fall 2018)
      </ExternalLink>
      , Y Combinator has invested in roughly 2000 startups, and the total
      valuation of all Y Combinator companies is roughly{' '}
      <Em>$100 billion dollars</Em>. <Strong>Example:</Strong> Dropbox graduated
      from Y Combinator{' '}
      <ExternalLink href="https://www.ycombinator.com/apply/dropbox/">
        in 2017
      </ExternalLink>{' '}
      and became a public company in 2018.
    </P>
    <P>
      <Strong>Now, why did they name it “Y Combinator”?</Strong> Here's what{' '}
      <Em>Paul Graham, one of the founders of Y Combinator</Em>, said in{' '}
      <ExternalLink href="https://mixergy.com/interviews/y-combinator-paul-graham/">
        an interview
      </ExternalLink>
      :
    </P>
    <EmojiSeparator emojis={['😎', '🆚', '👔']} Component={P} />
    <Blockquote>
      <P>
        <Strong>
          <Em>[Y Combinator is] a programming trick.</Em>
        </Strong>{' '}
        ... I wanted to call it Y Combinator just because I thought the Y
        Combinator was a really cool thing. So it would be the perfect name for{' '}
        <Em>picking out the kind of people that we wanted</Em>. Hackers would
        look at this and think, “That’s so cool. They’re named after the Y
        Combinator. There must be something going on here.” And suits would look
        at it and think, “Y Combinator, what’s that?” That was what we wanted.{' '}
        <Em>We wanted hackers to notice us, and suits, we didn’t care</Em>.
      </P>
    </Blockquote>
    <P>
      <Strong>Summary:</Strong> They wanted to invest in{' '}
      <Em>programmer-turned-entrepreneurs, rather than in businesspeople</Em>.
      To attract programmers, they named it “Y Combinator”, after a cool
      programming trick.
    </P>
    <P>
      <Strong>But:</Strong>
    </P>
  </>
)
