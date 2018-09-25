import { Hr, Ol, OlLi, P, Strong } from 'src/components/ContentTags'

export default () => (
  <>
    <P>
      <Strong>Question:</Strong> Which of the following is/are the correct
      description(s) of the term <Strong>“Y Combinator”</Strong>?
    </P>
    <Ol>
      <OlLi>
        Y Combinator is <Strong>a startup accelerator</Strong> in the United
        States. It was an early investor for companies like Dropbox and AirBnB.
      </OlLi>
      <OlLi>
        Y Combinator is <Strong>a way to define recursive functions</Strong> in
        a programming language that does not support recursion.
      </OlLi>
      <OlLi>
        Y Combinator is{' '}
        <Strong>an implementation of a fixed-point combinator</Strong>.
      </OlLi>
    </Ol>
    <Hr />
    <P>
      <Strong>Answer:</Strong> 1, 2, and 3 are all correct.
    </P>
  </>
)
