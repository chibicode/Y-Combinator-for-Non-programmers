/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import {
  Em,
  InlineHeader,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import { colors } from 'src/lib/theme'
import H from 'src/components/H'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import {
  InlineEmojiBoxesForCondition,
  InlineEmojiBoxesForQuestion
} from 'src/components/InlineEmojiBoxes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            条件分岐の
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、以前紹介した「
              <Strong>
                条件分岐の
                <H args={{ name: 'bentoBox' }} />
              </Strong>
              」を省略表記していきます。まずは、復習から:
            </P>
            {AER.nlxe}
            <H args={{ name: 'isZeroReview' }} />
          </>
        )
      },
      {
        title: <>条件分岐の省略表記</>,
        content: (
          <>
            <P>
              では、この条件分岐の
              <H args={{ name: 'bentoBox' }} />
              を、
            </P>
            {AER.nlxe}
            <P>次のように省略表記してみましょう:</P>
            {AER.hvdn}
            <Ul>
              <UlLi>
                まず、
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                (真ん中、黄色い枠)の中にある
                <InlineEmojiBoxesForQuestion />
                の暗号が「0」かどうかチェックします。
              </UlLi>
              <UlLi>
                もし「<Strong>0</Strong>」なら、{' '}
                <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                (一番下、青い枠)に入っている料理が残ります。この場合は
                <EmojiWithText letter="y" />
                です。
              </UlLi>
              <UlLi>
                もし「<Strong>1以上</Strong>なら」、{' '}
                <InlineEmojiBoxesForCondition type="falseCase" />{' '}
                (一番上、赤い枠)に入っている料理が残ります。この場合は
                <EmojiWithText letter="z" />
                です。
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['0️⃣', '🚦', '🔢']} />
            <P>
              <span
                css={css`
                  background: ${colors('pink100')};
                `}
              >
                <InlineHeader>赤</InlineHeader>
              </span>
              ・
              <span
                css={css`
                  background: ${colors('yellow200')};
                `}
              >
                <InlineHeader>黄色</InlineHeader>
              </span>
              ・
              <span
                css={css`
                  background: ${colors('teal100')};
                `}
              >
                <InlineHeader>青</InlineHeader>
              </span>
              と、まるで縦型の信号機 <Emoji>🚦</Emoji>{' '}
              みたいですね。ちなみに、日本では横型の信号機 <Emoji>🚥</Emoji>{' '}
              が主流ですが、世界のほとんどの国では縦型 <Emoji>🚦</Emoji>{' '}
              が主流です。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>補足:</InlineHeader>{' '}
                <Em>
                  省略前と違う点としては、
                  <InlineEmojiBoxesForQuestion />
                  が一番下から真ん中に移動した点です。
                </Em>
                このような配置にしたほうが、見た目的に分かりやすいと判断しました。
              </P>
            </>
          )
        }
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              では、試しに
              <H args={{ name: 'yesNoQuiz' }} />
              を行ってみましょう！
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.vxnm}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 4 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.xefx}
            <P>
              手短に解説します。まず、
              <InlineEmojiBoxesForCondition type="condition" />{' '}
              (真ん中、黄色い枠)の中にある暗号が「0」かどうかチェックします。
            </P>
            {AER.wcsz}
            <P>
              <InlineEmojiBoxesForCondition type="condition" /> の暗号は{' '}
              <Emoji>3️⃣</Emoji> なので、「1以上」の方、つまり上の{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> が残ります。
            </P>
            {AER.psqo}
            <P>
              というわけで、最後は <Emoji>2️⃣</Emoji> だけになります。
            </P>
            {AER.xsby}
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              次に進む前に、理解を確実にするためにもう一問やってみましょう。
            </P>
            {AER.repd}
          </>
        )
      }
    ]}
  />
)
