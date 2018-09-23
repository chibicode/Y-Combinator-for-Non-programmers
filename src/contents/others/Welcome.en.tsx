import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'

export default () => (
  <>
    <p>
      Welcome! At Hoshiai, <TextHighlight>non-programmers</TextHighlight> can
      learn how to think like Computer Scientists.
    </p>

    <p>
      There's <TextHighlight>no coding</TextHighlight> involved. And it's{' '}
      <TextHighlight>free</TextHighlight>.
    </p>

    <p>
      Try our first lesson:{' '}
      <HomeLink
        linkProps={{ href: '/lessons/y-combinator-for-non-programmers' }}
      >
        Y Combinator for Non-Programmers
      </HomeLink>
    </p>
  </>
)
