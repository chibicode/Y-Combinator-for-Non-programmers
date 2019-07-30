import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  InlineHeader,
  Ul,
  UlLi,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import NextLessonButton from 'src/components/NextLessonButton'
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
            <EmojiSeparator
              emojis={['🎁', '🎁', '🎁']}
              description={<>↑ これが計算箱のアイコンです！</>}
            />
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
            <P>
              では、計算箱がどんなものか紹介していきましょう！<Emoji>🙂</Emoji>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> 「ラムダ村」は、
                <Em>上から読んでも下から読んでも「ラムダ村」</Em>です{' '}
                <Emoji>😉</Emoji>
                。なぜ「ラムダ」と名付けたかは最後に説明します！
              </P>
            </>
          )
        }
      },

      {
        title: <>計算箱の例</>,
        content: (
          <>
            <P>
              こちらをご覧ください。これが、ラムダ村の人々が使っていた「
              <Strong>計算箱</Strong>」のひとつです。
            </P>
            <R.Lizi>
              計算箱 <Emoji>🎁</Emoji>
            </R.Lizi>
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
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'play' }} /> ボタン
          </>
        ),
        content: (
          <>
            <P>
              それぞれの計算箱には
              <Strong>
                <H args={{ name: 'play' }} /> ボタン
              </Strong>
              がついており、それを押すと計算が実行されます。試しに、下の計算箱で
              <Strong>
                <H args={{ name: 'pressPlay' }} />
              </Strong>
            </P>
            <R.Mcug />
            <P>
              <Strong>
                結果は <EmojiNumber number={2} /> になりました
              </Strong>
              。つまり、
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できたということです。
            </P>
            <Hr />
            <P>
              他の計算箱も見てみましょう！たとえばこちらをご覧になり、
              <Strong>
                <H args={{ name: 'pressPlay' }} />
              </Strong>
            </P>
            <R.Aovj />
            <P>
              こちらは <EmojiNumber number={4} /> になり、すなわち{' '}
              <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できました！<Emoji>🙂</Emoji>
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>ここまでをまとめると、下の計算箱のように、</P>
            <R.Rviy />
            <Ul>
              <UlLi>
                <Strong>
                  上に何らかの数字 <CustomEmoji type="blankNumber" />{' '}
                  が入っていて、
                </Strong>
              </UlLi>
              <UlLi>
                <Strong>
                  下に <CustomEmoji type="plusOne" /> が入っている場合、
                </Strong>
              </UlLi>
              <UlLi>
                <Strong>
                  <H args={{ name: 'play' }} /> すると結果は{' '}
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> になる
                </Strong>
              </UlLi>
            </Ul>
            <P>ということです。</P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
          </>
        )
      },
      {
        title: <>マイナス1</>,
        content: (
          <>
            <P>
              計算箱は「プラス1」だけではなく、「<Strong>マイナス1</Strong>
              」を計算することもできます。こちらの計算箱を
              <H args={{ name: 'play' }} />
              してみてください:
            </P>
            <R.Xmqp />
            <P>
              結果は <EmojiNumber number={2} /> になり、すなわち{' '}
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できました！<Emoji>🙂</Emoji>
            </P>
            <Hr />
            <P>
              このように、何らかの数字 <CustomEmoji type="blankNumber" /> の下に{' '}
              <CustomEmoji type="minusOne" /> が入っていると、
              <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> を計算することができるのです。
            </P>
            <R.Ditw />
          </>
        )
      },
      {
        title: (
          <>
            使えるのは <CustomEmoji type="plusOne" /> と{' '}
            <CustomEmoji type="minusOne" /> だけ
          </>
        ),
        content: (
          <>
            <P>
              ここが重要なポイントなのですが、計算に使うことができるのは{' '}
              <Strong>
                <CustomEmoji type="plusOne" /> と{' '}
                <CustomEmoji type="minusOne" /> だけです
              </Strong>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🎁</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <P>
              それでは質問です。 <CustomEmoji type="plusOne" /> と{' '}
              <CustomEmoji type="minusOne" /> しか使えないのであれば、たとえば{' '}
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={2} />{' '}
              といった計算はどのように行えばいいのでしょうか？<Emoji>🤔</Emoji>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={2} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> を2回使う
          </>
        ),
        content: (
          <>
            <P>
              正解を教えましょう。
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={2} /> を計算したい場合、{' '}
              <Strong>
                <CustomEmoji type="plusOne" /> を2回
              </Strong>
              使えばいいのです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <P>
              実際に試してみましょう。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Jiqb />
            <P>
              結果は <EmojiNumber number={4} /> になり、すなわち{' '}
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={2} />
              が計算できました！<Emoji>🙂</Emoji>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="plusOne" /> も <CustomEmoji type="minusOne" />{' '}
            も何回でも使える
          </>
        ),
        content: (
          <>
            <P>
              ちなみに、
              <Strong>
                <CustomEmoji type="plusOne" /> も{' '}
                <CustomEmoji type="minusOne" />{' '}
                も、どちらも何回でも使うことができます
              </Strong>
              。<Emoji>😉</Emoji>
            </P>
            <EmojiSeparator
              noBottomMargin
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <P>
              たとえば、下の計算箱は、
              <Strong>
                <CustomEmoji type="plusOne" /> を3回
              </Strong>
              使うことで、
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算してくれます。
            </P>
            <R.Eagi />
            <P>
              一方、下の計算箱は、
              <Strong>
                <CustomEmoji type="minusOne" /> を4回
              </Strong>
              使うことで、
              <EmojiNumber number={5} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={4} /> を計算してくれます。
            </P>
            <R.Yjur />
          </>
        )
      },
      {
        title: <>どんな大きな数字の足し算でも引き算でもできる</>,
        content: (
          <>
            <P>
              つまり、
              <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
              を何度も使うことで、
              <Em>
                どんな大きな数字の足し算でも引き算でも計算箱で行うことができます
              </Em>
              。
            </P>
            <P>
              たとえば、「1万 + 1万」を計算したかったら、
              <Strong>
                「1万」の下に「
                <CustomEmoji type="plusOne" />
                」を1万回配置した計算箱を実行すればいい
              </Strong>
              のです。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を1万回配置
            </R.Amoq>
            <P>
              ラムダ村の住人は計算がとても苦手だったので、
              <Em>足し算や引き算を行う時には必ず計算箱を使っていました</Em>。
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '➕', '🎁', '➖', '🙂', '🌲']}
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>ちなみに:</InlineHeader> 残念ながら、計算箱では
                <Strong>掛け算と割り算はできません。</Strong>
                できるのは、足し算と引き算だけです。
              </P>
              <EmojiSeparator emojis={['✖️', '😭', '➗']} />
              <P>
                ラムダ村の住人は計算がとても苦手だったので、計算箱で行うことができない掛け算と割り算は、適当に行うしかありませんでした。
                <Emoji>🤪</Emoji>
              </P>
            </>
          )
        }
      },
      {
        title: <>プラスマイナスの機能</>,
        content: (
          <>
            <P>
              今回紹介した、1を足したり引いたりできる計算箱の機能を、ラムダ村の住人は「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>
              」と呼んでいました。
            </P>
            <P>
              「プラス1」と「マイナス1」を計算できるので、「
              <CustomEmoji type="plusMinus" />{' '}
              <Strong>プラスマイナスの機能</Strong>」というわけです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="plusMinus" />,
                <Emoji>✨</Emoji>
              ]}
              description={<>プラスマイナスの機能</>}
            />
            <P>
              <Em>
                実は計算箱には、今回紹介した <CustomEmoji type="plusMinus" />{' '}
                プラスマイナスの機能以外にも、<Strong>さらにふたつ</Strong>
                の機能があります。
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusMinus" />,
                <Emoji>❓</Emoji>,
                <Emoji>❓</Emoji>
              ]}
            />
            <P>
              次のページでは、計算箱のふたつめの機能について紹介していきます！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
