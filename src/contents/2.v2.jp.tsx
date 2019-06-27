import React from 'react'
import {
  P,
  Em,
  Strong,
  InlineHeader,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>2月には何日ある？</>,
        content: (
          <>
            <P>
              人々は毎年、ある疑問に悩まされていました。それは、「
              <Strong>今年の2月には何日あるんだろう？</Strong>」という疑問です。
            </P>
            <EmojiSeparator emojis={['🤔', '2️⃣', '🗓']} />
            <P>答えはもちろん、以下の通りです。</P>
            <Ul>
              <UlLi>
                <Em>
                  うるう年の場合、2月には<Strong>29日</Strong>ある。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  それ以外の年の場合、2月には<Strong>28日</Strong>ある。
                </Em>
              </UlLi>
            </Ul>
            <P>
              では、
              <Strong>
                うるう年かどうかを判別するにはどうすればいいでしょう？
              </Strong>
            </P>
            <EmojiSeparator emojis={['🤔', '➗', '4️⃣']} />
            <P>
              うるう年は、基本的に「<Strong>4で割り切れる年</Strong>
              」です。たとえば東京オリンピックが行われる2020年は、2020が4で割り切れるのでうるう年となります。ちなみに例外もありますが、後に説明します。
            </P>
          </>
        )
      },
      {
        title: <>計算箱を使うと</>,
        content: (
          <>
            <P>
              <Em>
                人々は計算が苦手だったので、計算箱を使って「
                <Strong>2月に何日あるか</Strong>」を計算しようと試みました
              </Em>
              。<Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator emojis={['🎁', '2️⃣', '🗓']} />
            <P>
              まず、「
              <Strong>年の数を、4で割った余り</Strong>
              」を計算する計算箱はこちらです。
            </P>
            <R.Atkh />
            <P>
              たとえば、<Emoji>❓</Emoji> の部分に <EmojiNumber number={2020} />{' '}
              を入れて
              <H args={{ name: 'play' }} />
              すると、
              <EmojiNumber number={4} /> で割り切れるので、
              <EmojiNumber number={0} /> が残ります。
            </P>
            <R.Gruv />
            <ExpressionRunnerSeparator />
            <R.Lbua />
            <P>
              次に、「
              <InlineHeader>年の数を、4で割った余り</InlineHeader>
              」を計算する計算箱を、
              <Strong>
                条件分岐の計算箱の真ん中の部分{' '}
                <InlineEmojiBoxesForCondition type="condition" /> に入れます。
              </Strong>
            </P>
          </>
        )
      }
    ]}
  />
)
