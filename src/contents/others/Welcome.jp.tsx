import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/t'

export default () => (
  <>
    <p>
      <TextHighlight>CSmoji</TextHighlight>
      は、
      <TextHighlight>絵文字</TextHighlight>で
      <TextHighlight>コンピューターサイエンス(CS)</TextHighlight>
      を学べるサイトです。もちろん無料です。
      <Emoji>😉</Emoji>
    </p>
    <p>
      レッスン第一弾はこちら→{' '}
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>
    </p>
  </>
)
