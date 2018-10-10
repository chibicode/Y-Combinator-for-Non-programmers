import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import ExpressionRunnerWrapper from 'src/components/Yc/ExpressionRunnerWrapper'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  episode2Expression1,
  episode2Expression2
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>
        <InternalLink href={yc(1)}>第1章で出したクイズ</InternalLink>
        の答え合わせをしましょう。
      </Strong>
      仮に、次のような状態だった場合…
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
      <Strong>答え:</Strong> 次のステップにはこうなります。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🌮</Emoji>
      </UlLi>
    </Ul>
    <P>タコスがサラダと入れ替わります。正解できましたか？</P>
    <P>
      それでは次に、今回の話の肝となる「
      <Strong>不思議な弁当箱</Strong>
      」について解説していきます。
    </P>
    <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
    <H3>不思議な弁当箱</H3>
    <P>
      今回の話には、「
      <Em>
        不思議な弁当箱 <Emoji>🍱</Emoji>
      </Em>
      」がたくさん出てきます。見た目はこんな感じです。それぞれのマスの中に食べ物が入っているので、弁当箱っぽく見えるでしょう？
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToHighlight'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Strong>しかし、それぞれのマスはどういう意味なのでしょうか？</Strong>
      ひとつずつ解説していきましょう。
    </P>
    <P>
      <Em>
        まず、
        <Strong>右下のマス</Strong>
        は、選べる食事 <Emoji>🍽</Emoji> を表しています。
      </Em>
      この場合、食べられるのは寿司 <Emoji>🍣</Emoji> だけです。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'funcBodyJustHighlighted'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Em>
        次に、
        <Strong>左下のマス</Strong>
        は、あなた <Emoji>😋</Emoji> が次に食べるものを表しています。
      </Em>
      この場合、あなたが次に食べるのは寿司 <Emoji>🍣</Emoji> です。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'funcArgJustHighlighted'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      最後に、
      <Em>
        <Strong>上のマス</Strong>
        は、あなたが何かを食べる間に、シェフ <Emoji>👨‍🍳</Emoji>{' '}
        が作っている料理を表します。
      </Em>
      この場合、シェフが作っているのはサンドイッチ <Emoji>🥪</Emoji> です。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'callArgJustHighlighted'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Strong>というわけで:</Strong> 上の
      {h('ycBentoBox')}
      」は、以下の状況を表していることになります。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥪</Emoji>
      </UlLi>
    </Ul>
    <P>
      では、ちゃんと理解できたか確かめるために、クイズに挑戦してみましょう！
    </P>
    <EmojiSeparator emojis={['❓', '🤔', '❓']} />
    <H3>クイズ</H3>
    <P>
      下の
      {h('ycBentoBox')}
      は、どんな状況を表しているでしょう？
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToHighlight'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">❓</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">❓</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">❓</Emoji>
      </UlLi>
    </Ul>
    <P>答えは次のページにあります！</P>
    <NextLessonButton
      href={yc(3)}
      primaryText={<>次のページへ進む</>}
      secondaryText={
        <>
          第3章へ <Emoji>🙂</Emoji>
        </>
      }
    />
  </>
)
