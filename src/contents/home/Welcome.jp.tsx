import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/t'

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
      レッスン第一弾はこちら:{' '}
      <HomeLink linkProps={{ href: yc() }}>{t('lesson1Title')}</HomeLink>
    </p>
  </>
)
