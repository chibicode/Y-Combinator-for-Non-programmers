import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/titles'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em>
      では、
      <Em>絵文字</Em>を使った<Em>コンピューターサイエンス(CS)</Em>
      の教科書を無料で配布しています。
      <Emoji>😉</Emoji>
    </P>
    <P>
      第1弾の教科書はこちら→{' '}
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>
    </P>
  </>
)
