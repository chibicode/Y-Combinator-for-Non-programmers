/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineHeader, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import { colors } from 'src/lib/theme'
import H from 'src/components/H'
import AER from 'src/components/AER'
import EmojiWithText from 'src/components/EmojiWithText'
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
            <P>
              <EmojiWithText letter="y" />と<InlineEmojiBoxesForQuestion />
              の間にある2列が省略され、かなりシンプルになりました。枠にも
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
                  background: ${colors('blue100')};
                `}
              >
                <InlineHeader>青</InlineHeader>
              </span>
              ・
              <span
                css={css`
                  background: ${colors('yellow400')};
                `}
              >
                <InlineHeader>黄色</InlineHeader>
              </span>
              の色がつき、それぞれの枠の左上には枠の意味を表す絵文字がつき、何が起きているか分かりやすくなりました。
            </P>
            <EmojiSeparator emojis={['⬆️', '0️⃣', '🔢']} />
            <P>仕組みは以下の通りです:</P>
            <Ul>
              <UlLi>
                まず、
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                (一番下、黄色い枠)の中にある
                <InlineEmojiBoxesForQuestion />
                の暗号が「0」かどうかチェックします。
              </UlLi>
              <UlLi>
                もし「<Strong>0</Strong>」なら、{' '}
                <InlineEmojiBoxesForCondition type="trueCase" />{' '}
                (真ん中、青い枠)に入っている料理が残ります。この場合は
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
            <P>
              では、試しに
              <H args={{ name: 'yesNoQuiz' }} />
              を行ってみましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>?</>,
        content: <></>
      }
    ]}
  />
)
