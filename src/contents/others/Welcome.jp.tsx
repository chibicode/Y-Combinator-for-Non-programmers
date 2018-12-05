import Emoji from 'src/components/Emoji'
import HomeLink from 'src/components/HomeLink'
import TextHighlight from 'src/components/TextHighlight'
import { yc } from 'src/lib/pathHelpers'
import t from 'src/lib/t'

export default () => (
  <>
    <p>
      ようこそ！ <Emoji>👋</Emoji> CSmojiは、
      <TextHighlight>絵文字</TextHighlight>
      でコンピューターサイエンスを学べるサイトです。
      <Emoji>😉</Emoji>
    </p>
    <p>
      よければ、レッスン第一弾「
      <HomeLink linkProps={{ href: yc() }}>{t('ycTitle')}</HomeLink>
      」をご覧ください。もちろん
      <TextHighlight>無料</TextHighlight>
      です。
      <Emoji>👍</Emoji>
    </p>
  </>
)
