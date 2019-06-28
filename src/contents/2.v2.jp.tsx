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
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'
import H from 'src/components/H'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>計算箱の使い道は？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、
              <Strong>
                前回紹介した計算箱を、人々が何のために使っていたのか
              </Strong>
              を説明します。
            </P>
            <R.Yhmp />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2019} /> を入れてみる
          </>
        ),
        content: (
          <>
            <P>
              試しに何か数字を入れてみましょう。この記事を公開したのは2019年なので、
              <EmojiNumber number={2019} /> を入れてみます。(<Em>黄色</Em>
              で示しています)
            </P>
            <R.Drbt />
            <P>
              前回説明した通り、
              <Strong>
                先に真ん中の部分{' '}
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある、割り算の余りを計算します。
              </Strong>
            </P>
            <P>
              <EmojiNumber number={2019} /> を <EmojiNumber number={4} />{' '}
              で割ると、余りは <EmojiNumber number={1} /> になります。(
              <Em>黄色</Em>
              で示しています)
            </P>
            <R.Lfyt />
            <P>
              真ん中の部分 <InlineEmojiBoxesForCondition type="condition" /> が{' '}
              <EmojiNumber number={0} /> ではないので、上の{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> の中にある{' '}
              <EmojiNumber number={28} /> が最終的に残るというわけです。
            </P>
            <R.Vrko />
            <P>
              まとめると、最初に<Emoji>❓</Emoji> に{' '}
              <EmojiNumber number={2019} /> を入れると、結果は{' '}
              <EmojiNumber number={28} /> になります。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <EmojiNumber number={2019} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={28} />
              ]}
            />
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              計算箱がある世界の人々は毎年、「
              <Strong>今年の2月には何日まであるんだろう？</Strong>
              」という疑問に悩まされていました。
            </P>
            <EmojiSeparator emojis={['🤔', '2️⃣', '🗓']} />
            <P>
              たとえば、
              <Em>
                <Strong>2020年</Strong>の2月には<Strong>29日</Strong>
                までありますが、<Strong>2021</Strong>年の2月には
                <Strong>28日</Strong>までしかありません
              </Em>
              。2月の日数はどうやって計算すればいいのでしょう？
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={29} />,
                <Emoji>🆚</Emoji>,
                <EmojiNumber number={28} />
              ]}
            />
          </>
        )
      },
      {
        title: <>うるう年は29日</>,
        content: (
          <>
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
              」です。たとえば東京オリンピックが行われる2020年は、2020が4で割り切れるのでうるう年となります。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> 例外として、「
                <Em>100で割り切れて、400で割り切れない年</Em>
                」はうるう年ではありません。たとえば2100年は、100で割り切れて400で割り切れないので、うるう年ではありません。
              </P>
              <P>
                ただ都合上、<Em>この例外はここでは無視する</Em>ことにします。
                <Emoji>😉</Emoji>
              </P>
            </>
          )
        }
      },
      {
        title: <>計算箱を使うと</>,
        content: (
          <>
            <P>
              <Em>
                人々は計算が苦手だったので、計算箱を使って「
                <Strong>2月には何日まであるか</Strong>」を計算しようと試みました
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
              <EmojiNumber number={0} /> が残ります。 試しに
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Gruv />
          </>
        )
      },
      {
        title: <>条件分岐の弁当箱と組み合わせる</>,
        content: (
          <>
            <P>
              次に、先ほどの計算箱を、
              <Strong>条件分岐の計算箱と組み合わせます。</Strong>
              こちらをご覧ください。
            </P>
            <R.Yhmp />
            <P>
              真ん中の部分 <InlineEmojiBoxesForCondition type="condition" />{' '}
              に、先ほどの計算箱が入っているのに注目です。
            </P>
          </>
        )
      }
    ]}
  />
)
