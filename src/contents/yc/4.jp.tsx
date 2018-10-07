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
  episode3Expression1,
  episode4Expression1,
  episode4Expression2
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <InternalLink href={yc(3)}>第3章で出したクイズ</InternalLink>
      の答え合わせをしましょう。
    </P>
    <P>
      前回同様、ボタンを用意しました。
      <Em>
        {h('ycNext')}
        をクリックすれば
      </Em>
      答えがわかります。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode3Expression1}
        showPriorities={false}
        showControls
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
      つまり、答えは{' '}
      <Em>
        <Strong>
          サンドイッチ <Emoji>🥪</Emoji>
        </Strong>
      </Em>{' '}
      です。でも、どうしてそうなるのでしょう？
    </P>
    <EmojiSeparator emojis={['🥪', '🤔', '🥪']} />
    <P>
      理由を説明しましょう。あなたはお寿司 <Emoji>🍣</Emoji>{' '}
      を食べようとしましたが、残念ながら料理の中にはありませんでした。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥪</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍣</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥗</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Em>というわけで、あなたは何も食べませんでした</Em>
      。シェフ <Emoji>👨‍🍳</Emoji> が作ったサラダ <Emoji>🥗</Emoji>{' '}
      と、サンドイッチ <Emoji>🥪</Emoji>{' '}
      は入れ替わりません。というわけで、サンドイッチ <Emoji>🥪</Emoji>{' '}
      はそのままになるのです。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥪</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Em>
        <Strong>ポイント:</Strong> シェフ <Emoji>👨‍🍳</Emoji> が作ったサラダ{' '}
        <Emoji>🥗</Emoji> は<Strong>次のステップには持ち越されません</Strong>。
      </Em>
    </P>
    <H3>下段が3マスの問題</H3>
    <P>次は、下段に3マスもある問題を見ていきましょう。たとえばこちら:</P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
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
      どう読み取ればいいか説明しましょう。まず、
      <Strong>下段の一番右のマス</Strong>
      は、選べる食事 <Emoji>🍽</Emoji> を表しています。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
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
      次に、
      <Strong>下段の一番左のマス</Strong>
      は、あなた <Emoji>😋</Emoji> が次に食べるものを表しています。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
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
      <Strong>上のマス</Strong>
      は、シェフ <Emoji>👨‍🍳</Emoji>{' '}
      が作っている料理を表します。これは以前と変わりませんね。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
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
      <Strong>ポイント:</Strong> この場合、
      <Em>
        サンドイッチ <Emoji>🥪</Emoji>{' '}
        は3種類のどれにも分類されません。だから、次のステップに進むと、サンドイッチ{' '}
        <Emoji>🥪</Emoji> のマスは
        <Strong>そのまま</Strong>
        になります
      </Em>
      。
    </P>
    <P>
      <Em>
        {h('ycNext')}
        をクリックして
      </Em>
      どうなるか確かめてみましょう。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode4Expression1}
        showPriorities={false}
        showControls
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
      <Strong>箇条書きでまとめると、こうなります:</Strong>
    </P>
    <Ul>
      <UlLi>
        <Emoji>🥪</Emoji> サンドイッチのマスはそのまま
      </UlLi>
      <UlLi>
        <Emoji>😋</Emoji> あなたが食べたのはお寿司 <Emoji>🍣</Emoji>.
      </UlLi>
      <UlLi>
        <Emoji>🍽</Emoji> 下段の一番右にあったお寿司 <Emoji>🍣</Emoji> が、シェフ{' '}
        <Emoji>👨‍🍳</Emoji> が料理していたサラダ <Emoji>🥗</Emoji> に変わった。
      </UlLi>
      <UlLi>
        <Em>
          そして、下段の一番左のマス(
          <Emoji>😋</Emoji> → <Emoji>🍣</Emoji>) と、上の段のマス(
          <Emoji>👨‍🍳</Emoji> → <Emoji>🥗</Emoji>
          )が
          <Strong>消えた</Strong>
        </Em>
        。
      </UlLi>
    </Ul>
    <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
    <P>急に難しくなってきたかと思いますが、この調子で進んでみてください！</P>
    <H3>クイズ: 下段が4マスの問題</H3>
    <P>
      <Em>下段が4マスある場合</Em>
      はどうでしょう？たとえば、下の
      {h('ycBentoBox')}
      は、次のステップでどうなると思いますか？
    </P>
    <ExpressionRunnerWrapper size="xs">
      <ExpressionRunner
        expressionContainer={episode4Expression2}
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
      <Strong>ヒントはこちらです:</Strong>
    </P>
    <ExpressionRunnerWrapper size="xs">
      <ExpressionRunner
        expressionContainer={episode4Expression2}
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
    <NextLessonButton
      href={yc(5)}
      primaryText={<>次のページへ進む</>}
      secondaryText={
        <>
          第5章へ <Emoji>🙂</Emoji>
        </>
      }
    />
  </>
)
