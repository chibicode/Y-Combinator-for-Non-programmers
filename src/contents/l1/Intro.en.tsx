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
      description(s) of the term <Strong>“Y Combinator”</Strong>?
    </P>
    <Ol>
      <OlLi>
        Y Combinator is <Strong>a startup accelerator</Strong>. It was an early
        investor for companies like Dropbox and AirBnB.
      </OlLi>
      <OlLi>
        Y Combinator is <Strong>a way to define recursive functions</Strong>.
      </OlLi>
      <OlLi>
        Y Combinator is <Strong>a fixed-point combinator</Strong>.
      </OlLi>
    </Ol>
    <Hr />
    <P>
      <Strong>Answer:</Strong> 1, 2, and 3 are all correct.
    </P>
    <Ul>
      <UlLi>
        <Strong>If you're in the tech industry:</Strong> You might have known
        that Y Combinator is a startup accelerator (choise 1). But did you know
        that Y Combinator is actually named after a <Em>very cool concept</Em>{' '}
        in Computer Science (choices 2 and 3)? If you didn't know that, please
        read on!
      </UlLi>
      <UlLi>
        <Strong>If you're a programmer:</Strong> you might have gotten it right.
        But have you actually implemented Y Combinator?
      </UlLi>
    </Ul>
  </>
)
