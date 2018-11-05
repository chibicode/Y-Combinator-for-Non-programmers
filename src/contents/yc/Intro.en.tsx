import { css } from 'emotion'
import {
  Blockquote,
  Em,
  ExternalLink,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import SideNoteSection from 'src/components/SideNoteSection'
import { introduction } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'

export default () => {
  let i = 0
  return (
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
          Y Combinator is <Em>a startup accelerator</Em>. It was an early
          investor for companies like Dropbox and AirBnB.
        </OlLi>
        <OlLi>
          Y Combinator is <Em>a programming trick</Em> that allows one to
          implement loops in a programming language that doesn’t support loops.
        </OlLi>
      </Ol>
      <EmojiSeparator emojis={['1️⃣', '🤔', '2️⃣']} Component={P} />
      <P>
        <Strong>
          Answer: <Em>1 and 2 are both correct</Em>.
        </Strong>
      </P>
      <Ul>
        <UlLi>
          <Strong>If you’re in the tech industry:</Strong> You might know that Y
          Combinator is a startup accelerator (choice 1). But{' '}
          <Em>
            did you know that Y Combinator (the startup accelerator) is actually
            named after a cool concept in programming
          </Em>{' '}
          (choice 2)? If you didn’t know that, I think you’ll like this article.
        </UlLi>
        <UlLi>
          <Strong>If you’re a programmer:</Strong> You might know that Y
          Combinator is a programming concept. Maybe you've implemented it. But{' '}
          <Em>
            can you explain what Y Combinator (in programming) is to a
            non-programmer
          </Em>
          ? If you can’t, I think you’ll like this article. Of couse, if you’re
          a programmer who don't know much about Y Combinator (in programming),
          I think you’ll like this article as well.
        </UlLi>
        <UlLi>
          <Strong>If you’ve never heard of the term “Y Combinator”:</Strong>{' '}
          That’s great! <Em>I’m writing this article for someone like you.</Em>{' '}
          If you’re interested in learning about one of the best programming
          concepts
          <Em>without actually learning to code</Em>, I think you’ll like this
          article.
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['😉', '👍', '❤️']} />
      <P>
        <Strong>Before we begin, here’s some backstory:</Strong> In 2005, a
        group of successful entrepreneurs, who were programming experts, started
        training and investing in young entrepreneurs who were also programmers.
        This startup “accelerator” was called “Y Combinator”.{' '}
      </P>
      <P>
        <Strong>Current Stats:</Strong>{' '}
        <ExternalLink href="http://www.ycombinator.com/press/">
          As of writing (Fall 2018)
        </ExternalLink>
        , Y Combinator has invested in roughly 2000 startups like AirBnB and
        Dropbox, and the total valuation of{' '}
        <ExternalLink href="http://www.ycombinator.com/topcompanies/">
          top 100 companies
        </ExternalLink>{' '}
        is roughly <Em>$100 billion dollars</Em>
      </P>
      <P>
        <Strong>Now, why did they name it “Y Combinator”?</Strong> Here's what{' '}
        <Em>Paul Graham</Em>, one of the founders of Y Combinator, said in{' '}
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
          Combinator was a really cool thing. So it would be the perfect name
          for <Em>picking out the kind of people that we wanted</Em>.
        </P>
        <P>
          Hackers would look at this and think, “That’s so cool. They’re named
          after the Y Combinator. There must be something going on here.” And
          suits would look at it and think, “Y Combinator, what’s that?” That
          was what we wanted.{' '}
          <Em>We wanted hackers to notice us, and suits, we didn’t care</Em>.
        </P>
      </Blockquote>
      <P>
        <Strong>Summary:</Strong> They wanted to invest in entrepreneurs who
        were good programmers (hackers) and <Em>avoid non-programmers</Em>. To
        attract programmers, they named it “Y Combinator”, after a cool
        programming trick.
      </P>
      <P>
        <Strong>But I don’t like this mindset.</Strong> Sure, the name works
        well to attract programmers, and the Y Combinator founders had good
        intentions. But generally speaking, I don’t like it when programmers
        say, <Em>“Oh, non-programmers won’t understand this idea”</Em> and{' '}
        <Em>refuse to explain things in a way non-programmers understand</Em>.
        Maybe I’m too harsh, but I think this kind of a mindset is harmful,
        especially as the software (especially AI) is changing the world faster
        than ever.
      </P>
      <EmojiSeparator emojis={['🤖', '🌏', '🤖']} Component={P} />
      <P>
        <Strong>
          Can non-programmers learn what Y Combinator (in programming) is?
        </Strong>{' '}
        The answer is <Em>Yes</Em>. I just made an interactive tutorial where
        anyone can learn what Y Combinator is.{' '}
        <Em>There’s no coding involved</Em>; rather, you'll learn by solving
        puzzles.
      </P>
      <P>
        <Strong>So:</Strong> If you're interested in learning about Y
        Combinator, please press the button below. Don’t worry,{' '}
        <Em>you can read everything for free</Em>. You can do it from{' '}
        <Em>your smartphone or your computer</Em>.
      </P>
      <YcNextLessonButton nextEpisodeNumber={1} primaryTextType="start" />
      <SideNoteSection heading="Can you just tell me what Y Combinator is?">
        <P>
          Sure. <Em>This is what Y Combinator (in programming) looks like:</Em>
        </P>
        {introduction[i++]()}
        <P>
          <Strong>This is not a joke.</Strong> I will teach you what Y
          Combinator is using these food emojis.{' '}
          <Em>
            As you go through the tutorial, you’ll understand exactly what these
            food emojis mean.
          </Em>
        </P>
      </SideNoteSection>
      <SideNoteSection heading="Who wrote this?" headingNoMarginBottom>
        <EmojiSeparator emojis={['👨‍🎤']} Component={P} spacing="sm" size="lg" />
        <P
          className={css`
            margin-top: 0;
          `}
        >
          Good question!{' '}
          <Em>
            My name's <Strong>Shu</Strong>
          </Em>
          . I was born in Japan and live in San Francisco Bay Area, CA.
        </P>
        <P>
          As of writing (2018),{' '}
          <Em>
            I work as a freelance engineer and a co-translator for “Factfulness”
            by Hans Rosling
          </Em>
          . It’s the book Bill Gates{' '}
          <ExternalLink href="https://twitter.com/billgates/status/981532669358911488">
            called
          </ExternalLink>{' '}
          “one of the best books I’ve read in a long time,” and I’m
          co-translating it into Japanese <Emoji>🇯🇵</Emoji>.
        </P>
        <P>
          <Em>In 2017, I traveled the world</Em>, visiting{' '}
          <ExternalLink href="https://chibicode.com/posts/tweets-from-my-world-trip/">
            36 countries and 94 cities
          </ExternalLink>
          . <Em>In 2016, I was a technical lead at EdSurge</Em>, an education
          technology startup in San Francisco Bay Area.
        </P>
        <P>
          As of writing,{' '}
          <Em>
            I'm looking for a{' '}
            <Strong>full-time job (San Francisco Bay Area or Remote)</Strong>
          </Em>
          .{' '}
          <ExternalLink href="https://about.chibicode.com/">
            Interested? Learn more about me here.
          </ExternalLink>{' '}
          (I'll remove this text when I get a job.)
        </P>
      </SideNoteSection>
      <P>
        <Strong>Alright.</Strong> Now that you know who I am… Are you ready to
        go to the next page? Again, <Em>you can read everything for free</Em>.
      </P>
      <YcNextLessonButton nextEpisodeNumber={1} primaryTextType="start" />
    </>
  )
}
