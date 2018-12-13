import { Em, P } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/t'

export default () => (
  <>
    <P>
      <Em>CSmoji</Em>
      は、
      <Em>絵文字</Em>で<Em>コンピューターサイエンス(CS)</Em>
      を学べるサイトです。もちろん無料です。
      <Emoji>😉</Emoji>
    </P>
    <P>
      レッスン第一弾はこちら→{' '}
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>
    </P>
  </>
)
