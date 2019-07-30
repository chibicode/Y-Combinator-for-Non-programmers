import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, InlineHeader } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>繰り返しの機能</>,
        content: (
          <>
            <P>
              前回は、計算箱の「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」について紹介しました。
            </P>
            <P>
              今回はもうひとつの計算箱の機能である「
              <Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明します。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>繰り返しの機能</>}
            />
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
              「<Emoji>🔁</Emoji> <Strong>繰り返しの機能</Strong>
              」について説明する前に、
              <H args={{ name: 'yesNoQuiz' }} />
              を解いてみましょう。
              <H args={{ name: 'lookAtThisMathBox' }} />:
            </P>
            <R.Dfjp />
            <P>
              <H args={{ name: 'whatHappensAtTheEndMathBoxQuestion' }} />
            </P>
            <R.Zdat />
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Lxrk />
            <P>
              つまり、結果は
              <EmojiNumber number={10} />
              ではなく
              <EmojiNumber number={9} />
              になります。
              <Strong>
                <CustomEmoji type="plusOne" /> が7個あるので、
                <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={7} />
                の計算が行われるわけです。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={7} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> の数を正しく数えないといけない
          </>
        ),
        content: (
          <>
            <P>
              先ほどの例だと、計算箱の中に
              <Strong>
                <CustomEmoji type="plusOne" />{' '}
                が7個あるのをわざわざ確かめなければいけませんでした。
              </Strong>
              数え間違いがあったら、正しい答えを出すことができません。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  <CustomEmoji type="plusOne" /> の数を間違えたらダメ！
                </>
              }
            />
            <P>
              計算箱に頼っていたラムダ村の人々にとっても、
              <CustomEmoji type="plusOne" />{' '}
              の数をいちいち確かめるのは面倒でした。ある村人は次のように語っていました。
            </P>
            <P>
              <InlineHeader>
                <Emoji size="mdlg">😩</Emoji> ラムダ村の村人:
              </InlineHeader>
              「
              <Em>
                計算箱で足し算をするときは、ひとつでも{' '}
                <CustomEmoji type="plusOne" />{' '}
                の数を間違えたら、間違った計算をしてしまうよ
              </Em>
              」
            </P>
            <P>
              では、
              <Em>
                どうすれば <CustomEmoji type="plusOne" />{' '}
                の数を数え間違えずにすむのでしょうか？
              </Em>
            </P>
          </>
        )
      }
    ]}
  />
)
