import {
  Em,
  Hr,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'

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
        <Strong>If you're in the tech industry:</Strong> You might have heard
        that Y Combinator is a startup accelerator (choice 1). But{' '}
        <Em>
          did you know that Y Combinator is actually named after a very cool
          concept in Computer Science
        </Em>{' '}
        (choices 2 and 3)? If you didn't know that, I think you'll enjoy this
        article.
      </UlLi>
      <UlLi>
        <Strong>If you're a programmer:</Strong> You might have heard about Y
        Combinator in a programming context. But{' '}
        <Em>
          can you explain what Y Combinator (in programming) is to a
          non-programmer
        </Em>
        ? If you can't, I think you'll enjoy this article.
      </UlLi>
      <UlLi>
        <Strong>If you've never heard of the term “Y Combinator”:</Strong>{' '}
        That's great! If you're interested in learning a very cool concept in
        Computer Science, I think you'll enjoy this article.
      </UlLi>
    </Ul>
  </>
)
