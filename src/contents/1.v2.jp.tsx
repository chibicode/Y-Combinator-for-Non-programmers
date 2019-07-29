import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  InlineHeader,
  Ol,
  OlLi,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>この話はフィクションです</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              本稿は<Em>ゆるい物語調</Em>
              で話を進めていきます。ちなみに、この話はフィクションです。
              <Emoji>😉</Emoji>
            </P>
            <P>
              まずは、この物語に登場する「
              <Strong>計算箱</Strong>」の話をしましょう。
            </P>
            <EmojiSeparator emojis={['🎁', '🎁', '🎁']} />
          </>
        )
      },
      {
        title: <>ラムダ村の計算箱</>,
        content: (
          <>
            <P>
              むかしむかし、「<Strong>ラムダ村</Strong>
              」という小さな山奥の村があり、人々が仲良く暮らしていました。
            </P>
            <EmojiSeparator emojis={['🌲', '🙂', '🙂', '🌲']} />
            <P>
              ラムダ村には、代々伝わる「<Strong>計算箱</Strong>
              」という道具がありました。<InlineHeader>計算箱</InlineHeader>
              は、その名の通り<Em>算数の計算をしてくれる</Em>
              魔法の道具です。現代の電卓のようなものだと考えていただければいいです。
            </P>
            <EmojiSeparator emojis={['✨', '🎁', '✨']} />
            <P>
              ラムダ村の人々は<Em>計算がとても苦手だったので</Em>
              、とても簡単な計算でも計算箱に頼りきっていました。
            </P>
            <EmojiSeparator emojis={['🌲', '🙂', '🎁', '🙂', '🌲']} />
            <P>では、計算箱がどんなものか紹介していきましょう！</P>
          </>
        )
      },
      {
        title: <>計算箱の3つの機能</>,
        content: (
          <>
            <P>
              計算箱には、以下の<Strong>3つの機能</Strong>が備わっています。
            </P>
            <Ol>
              <OlLi>
                <Strong>
                  <CustomEmoji type="plusMinus" /> プラスマイナスの機能
                </Strong>
              </OlLi>
              <OlLi>
                <Strong>
                  <Emoji>↔️</Emoji> 条件分岐の機能
                </Strong>
              </OlLi>
              <OlLi>
                <Strong>
                  <Emoji>🔁</Emoji> 繰り返しの機能
                </Strong>
              </OlLi>
            </Ol>
            <P>
              今回は、ひとつめの
              <Strong>
                <CustomEmoji type="plusMinus" /> プラスマイナスの機能
              </Strong>
              について解説していきます。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="plusMinus" />,
                <Emoji>✨</Emoji>
              ]}
            />
          </>
        )
      },
      {
        title: <>計算箱と、プラスマイナスの機能</>,
        content: (
          <>
            <P>
              こちらをご覧ください。これが、ラムダ村の人々が使っていた「
              <Strong>計算箱</Strong>」のひとつです。
            </P>
            <R.Lizi />
            <Ul>
              <UlLi>
                上には、数字の <EmojiNumber number={1} /> が入っています。
              </UlLi>
              <UlLi>
                下には、「プラス1」の印 <CustomEmoji type="plusOne" />{' '}
                が入っています。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <Emoji>🎁</Emoji>,
                <Emoji>1️⃣</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <P>
              そして、計算箱は「
              <H args={{ name: 'play' }} />
              」することができます。試しに、
              <Em>
                計算箱の下にある <H args={{ name: 'play' }} />{' '}
                ボタンを押してみてください。
              </Em>
            </P>
          </>
        )
      }
    ]}
  />
)
