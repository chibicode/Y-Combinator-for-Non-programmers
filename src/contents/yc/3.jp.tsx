import React from 'react'
import {
  Em,
  H3,
  InternalLink,
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
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import ExpressionRunnerWrapper from 'src/components/Yc/ExpressionRunnerWrapper'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  episode2Expression1,
  episode2Expression2,
  episode3Expression1
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>
        <InternalLink href={yc(2)}>第2章で出したクイズ</InternalLink>
        の答え合わせをしましょう。
      </Strong>
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
    <P>
      <Strong>答え:</Strong> この
      {h('ycBentoBox')}
      は、以下の状況を表しています。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>つまり、こういうことです。</P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToBetaReduce'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <H3>その次はどうなる？</H3>
    <P>
      上の状況だと、あなたがサラダ <Emoji>🥗</Emoji>{' '}
      を食べたあと、シェフはステーキ <Emoji>🥩</Emoji>{' '}
      を持ってきます。ということは、次のステップでは、
      <Em>
        料理はステーキ <Emoji>🥩</Emoji> だけ
      </Em>
      になりますね。
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>
      </UlLi>
    </Ul>
    <P>
      つまり、
      {h('ycBentoBox')}
      は次のステップにこうなります。
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
            state: 'justBetaReduced'
          },
          {
            type: 'stepForwardUntilContainerState',
            state: 'done'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Em>
        <Strong>重要なポイント:</Strong> あなたが食べた料理のマス{' '}
        <Emoji>😋</Emoji> と、シェフが作った料理のマス <Emoji>👨‍🍳</Emoji> は、
        <Strong>次のステップに移ると消える</Strong>
        ことを覚えておいてください。
      </Em>
    </P>
    <H3>「次へ」ボタンと「前へ」ボタン</H3>
    <P>
      遷移をわかりやすくするために、「次へ」ボタンと「前へ」ボタンを設置してみました。
    </P>
    <Ol>
      <OlLi>
        <Em>
          {h('ycNext')} ボタンを何度か押してみてください。いずれ {h('ycDone')}{' '}
          になり、料理がステーキ <Emoji>🥩</Emoji> だけになるはずです。
        </Em>
      </OlLi>
      <OlLi>
        そしたら今度は、 {h('ycPrevious')}{' '}
        ボタンを何度か押してみてください。元に戻るはずです。
      </OlLi>
    </Ol>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression2}
        showPriorities={false}
        showControls
        variableSize={'lg'}
        expressionContainerManagerSkipOptions={{
          readyToBetaReduce: true,
          justBetaReduced: true,
          default: true
        }}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToHighlight'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      こちらは前回で登場したもうひとつの例です。同じようにボタンを試してみてください。
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode2Expression1}
        showPriorities={false}
        showControls
        variableSize={'lg'}
        expressionContainerManagerSkipOptions={{
          readyToBetaReduce: true,
          justBetaReduced: true,
          default: true
        }}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToHighlight'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>コツがつかめてきたでしょうか？</P>
    <EmojiSeparator emojis={['⏪', '🤗', '⏩']} />
    <H3>クイズ</H3>
    <P>
      それでは、今までにない例を紹介します。下の
      {h('ycBentoBox')}
      を「次へ」と進めたら、最終的にどうなるでしょう？
    </P>
    <ExpressionRunnerWrapper>
      <ExpressionRunner
        expressionContainer={episode3Expression1}
        showPriorities={false}
        showControls={false}
        variableSize={'lg'}
        initializeInstructions={[
          {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: 'readyToBetaReduce'
          }
        ]}
      />
    </ExpressionRunnerWrapper>
    <P>
      <Em>
        次のステップではどの料理が残るのか、正しいと思うものを選んでみてください
      </Em>
      。見当がまったくつかなくても大丈夫です。次章で説明しますので！
    </P>
    <Ol>
      <OlLi>
        <Emoji size="lg">🍣</Emoji>
      </OlLi>
      <OlLi>
        <Emoji size="lg">🥪</Emoji>
      </OlLi>
      <OlLi>
        <Emoji size="lg">🥗</Emoji>
      </OlLi>
    </Ol>
    <NextLessonButton
      href={yc(4)}
      primaryText={<>次のページへ進む</>}
      secondaryText={
        <>
          第4章へ <Emoji>🙂</Emoji>
        </>
      }
    />
  </>
)
