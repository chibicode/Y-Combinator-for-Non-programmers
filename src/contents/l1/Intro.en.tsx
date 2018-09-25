import { Ol, OlLi } from 'src/components/ContentTags'

export default () => (
  <>
    <p>
      <strong>Question:</strong> Which of the following is/are the correct
      description(s) of the term <strong>"Y Combinator"</strong>?
    </p>
    <Ol>
      <OlLi>
        Y Combinator is <strong>a startup accelerator</strong> in the United
        States. It was an early investor for companies like Dropbox and AirBnB.
      </OlLi>
      <OlLi>
        Y Combinator is <strong>a way to define recursive functions</strong> in
        a programming language that does not support recursion.
      </OlLi>
      <OlLi>
        Y Combinator is{' '}
        <strong>an implementation of a fixed-point combinator</strong>.
      </OlLi>
    </Ol>
    <hr />
    <p>
      <strong>Answer:</strong> 1, 2, and 3 are all correct.
    </p>
  </>
)
