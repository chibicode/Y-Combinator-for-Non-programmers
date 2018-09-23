import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'

export default () => (
  <>
    <p>
      Hoshiaiは、
      <TextHighlight>コードを書かずに</TextHighlight>
      コンピューターサイエンスの考え方を学ぶことができるサイトです。
      <TextHighlight>プログラミング未経験</TextHighlight>
      でも大歓迎。もちろん
      <TextHighlight>無料</TextHighlight>
      です。
    </p>
    <p>
      <HomeLink
        linkProps={{ href: '/lessons/y-combinator-for-non-programmers' }}
      >
        リンク
      </HomeLink>
    </p>
  </>
)
