import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/t'

export default () => (
  <>
    <p>
      Hoshiaiは、 プログラミング的な思考法を
      <TextHighlight>コードを書かずに</TextHighlight>
      学べるサイトです。
      <TextHighlight>プログラミング未経験</TextHighlight>
      でも大歓迎。
    </p>
    <p>
      レッスン第一弾は「
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>
      」です。今なら
      <TextHighlight>無料</TextHighlight>。
    </p>
  </>
)
