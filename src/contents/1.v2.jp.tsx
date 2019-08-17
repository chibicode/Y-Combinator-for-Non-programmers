import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  InlineHeader,
  Ul,
  UlLi,
  Ol,
  OlLi,
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
              description={<>これが計算箱のアイコンです！</>}
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
              」という小さな山奥の村があり、村人が仲良く暮らしていました。
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '🙂', '🌲']}
              description={<>ラムダ村の村人たち</>}
            />
            <P>
              ラムダ村には、代々伝わる「<Strong>計算箱</Strong>
              」という道具がありました。<InlineHeader>計算箱</InlineHeader>
              は、その名の通り<Em>算数の計算をしてくれる</Em>
              魔法の道具です。<Em>現代の電卓のようなもの</Em>
              だと思ってください。
            </P>
            <EmojiSeparator
              emojis={['✨', '🎁', '✨']}
              description={
                <>
                  計算ができる魔法の道具「<Strong>計算箱</Strong>」
                </>
              }
            />
            <P>
              ラムダ村の人々は<Em>計算がとても苦手だったので</Em>
              、たとえば「
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
              」のような単純な足し算をするのにも、計算箱に頼りきっていました。
            </P>
            <EmojiSeparator
              emojis={['🙂', '🎁', '🙂']}
              description={
                <>
                  俺ら計算が苦手だから、
                  <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={3} /> といった
                  <br />
                  単純な足し算も、計算箱がないとできない！
                </>
              }
            />
            <P>それでは、計算箱について詳しく説明していきます！</P>
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
        title: <></>,
        content: (
          <>
            <P>そんな計算箱には、以下の3つの機能が備わっていました。</P>
            <Ol>
              <OlLi>
                <CustomEmoji type="plusOne" /> <Strong>プラス1</Strong>の機能
              </OlLi>
              <OlLi>
                <CustomEmoji type="minusOne" /> <Strong>マイナス1</Strong>の機能
              </OlLi>
              <OlLi>
                <Emoji>🔁</Emoji> <Strong>繰り返し</Strong>の機能
              </OlLi>
            </Ol>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>🔁</Emoji>
              ]}
              description={<>プラス1・マイナス1・繰り返しの機能</>}
            />
            <P>
              今回は、最初のふたつである「
              <Strong>
                <CustomEmoji type="plusOne" /> プラス1の機能
              </Strong>
              」と「
              <Strong>
                <CustomEmoji type="minusOne" /> マイナス1の機能
              </Strong>
              」について紹介します。
              <Emoji>🙂</Emoji>
            </P>
          </>
        )
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
                下には、「プラス1の印 <CustomEmoji type="plusOne" />」
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
                <Em>
                  上に何らかの数字 <CustomEmoji type="blankNumber" />{' '}
                  が入っていて、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  下に <CustomEmoji type="plusOne" /> が入っている場合、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <H args={{ name: 'play' }} /> すると結果は{' '}
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> になる
                </Em>
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
              ここが重要なポイントなのですが、計算に使うことができるのは、数字以外では{' '}
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
              description={
                <>
                  <CustomEmoji type="plusOne" /> と{' '}
                  <CustomEmoji type="minusOne" /> しか使えない
                </>
              }
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
              description={
                <>
                  <CustomEmoji type="plusOne" /> を2回使う
                </>
              }
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
              description={
                <>
                  <CustomEmoji type="plusOne" /> も{' '}
                  <CustomEmoji type="minusOne" /> も何回でも使える
                </>
              }
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
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="horizontalDotDotDot" />,
                <CustomEmoji type="plusOne" />
              ]}
              noBottomMargin
            />
            <EmojiSeparator
              noTopMargin
              nodes={[
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="horizontalDotDotDotRed" />,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  <CustomEmoji type="plusOne" /> も{' '}
                  <CustomEmoji type="minusOne" /> も何度も使えば、
                  <br />
                  どんな大きな数字でも足し算・引き算できる
                </>
              }
            />
            <P>
              たとえば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} /> を計算したかったら、
              <Strong>
                <EmojiNumber number={10} /> の下に「
                <CustomEmoji type="plusOne" />
                」を10回配置した計算箱を実行すればいい
              </Strong>
              のです。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を10回配置
            </R.Amoq>
            <P>
              このようにすれば、計算箱はどんな大きな数字の足し算でも引き算でもできます。
            </P>
            <P>
              そして、
              <Em>
                ラムダ村の村人は計算がとても苦手だったので、足し算や引き算を行う時には、必ずこのように計算箱を使って計算していました
              </Em>
              。
            </P>
            <EmojiSeparator
              emojis={['🙂', '➕', '🎁', '➖', '🙂']}
              description={<>「足し算や引き算は、計算箱におまかせしよう！」</>}
            />
          </>
        )
      },
      {
        title: <>プラスマイナスの機能</>,
        content: (
          <>
            <P>
              今回紹介した、1を足したり引いたりできる計算箱の機能を、ラムダ村の村人は「
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
          </>
        )
      },
      {
        title: <>もうひとつの計算箱の機能</>,
        content: (
          <>
            <P>
              <Em>
                実は計算箱には、今回紹介した <CustomEmoji type="plusMinus" />{' '}
                プラスマイナスの機能以外にも、<Strong>さらにもうひとつ</Strong>
                の機能があります。
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusMinus" />,
                <Emoji>🎁</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={<>もうひとつの機能がある</>}
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
