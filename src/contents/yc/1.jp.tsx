import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import { yc } from 'src/lib/pathHelpers'

export default () => (
  <>
    <P>
      <Strong>物語の設定:</Strong>{' '}
      食いしん坊のあなたにはお抱えのシェフがいます。夕食中、あなたが
      <Em>
        なにかひとつの料理を平らげたら、シェフはすぐに新しい料理を持ってきてくれるのです。
      </Em>
    </P>
    <H3>具体例</H3>
    <P>
      <Strong>ステップ1:</Strong> たとえば、
      <Em>
        お寿司 <Emoji>🍣</Emoji>
        、サンドイッチ <Emoji>🥪</Emoji>
        、サラダ <Emoji>🥗</Emoji>
      </Em>{' '}
      の3種類の料理が並べられているとします。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>ステップ2:</Strong> あなたは
      <Em>
        お寿司 <Emoji>🍣</Emoji>
      </Em>{' '}
      に箸を伸ばそうとします。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍣</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>ステップ3:</Strong>{' '}
      あなたが食べる間に、シェフは新しい料理を作ります。彼は
      <Em>
        ステーキ <Emoji>🥩</Emoji>
      </Em>{' '}
      を作ることにしました。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍣</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>Step 4:</Strong> あなたが寿司 <Emoji>🍣</Emoji> を食べ終えたあと、
      <Em>
        シェフはステーキ <Emoji>🥩</Emoji> を持ってきます
      </Em>
      。テーブルに並ぶ料理は
      <Em>
        ステーキ <Emoji>🥩</Emoji>
        、サンドイッチ <Emoji>🥪</Emoji>
        、サラダ <Emoji>🥗</Emoji>
      </Em>{' '}
      になりました。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <P>では、ここでクイズです。</P>
    <EmojiSeparator emojis={['❓', '🤔', '❓']} />
    <H3>クイズ</H3>
    <P>
      仮に、次のような状態だったとします。(シェフは <Em>タコス 🌮</Em>{' '}
      を作っています)
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🌮</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>
        では、次のステップでは
        <Em>テーブルに並ぶ料理 🍽</Em> はどうなるでしょう？
      </Strong>{' '}
    </P>
    <Ol size="lg">
      <OlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🌮</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </OlLi>
      <OlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🌮</Emoji> <Emoji size="lg">🥗</Emoji>
      </OlLi>
      <OlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🌮</Emoji>
      </OlLi>
    </Ol>
    <P>答えは次のページにあります！</P>
    <NextLessonButton
      href={yc(2)}
      primaryText={<>次のページへ進む</>}
      secondaryText={
        <>
          第2章へ <Emoji>🙂</Emoji>
        </>
      }
    />
  </>
)
