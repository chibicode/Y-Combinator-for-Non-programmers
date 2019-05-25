import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Ul, UlLi } from 'src/components/ContentTags'
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
              先ほどの
              <H args={{ name: 'bentoBox' }} />
              を、次のように省略表記してみましょう:
            </P>
            {AER.hvdn}
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
            <EmojiSeparator emojis={['⬆️', '0️⃣', '🔢']} />
          </>
        )
      }
    ]}
  />
)
