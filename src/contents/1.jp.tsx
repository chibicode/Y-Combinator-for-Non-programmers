import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Bold,
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
              本稿は<Highlight>ゆるい物語調</Highlight>
              で話を進めていきます。ちなみに、この話はフィクションです。
              <Emoji>😉</Emoji>
            </P>
            <P>
              まずは、この物語に登場する「
              <HighlightBold>計算箱</HighlightBold>」の話をしましょう。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
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
              むかしむかし、「<HighlightBold>ラムダ村</HighlightBold>
              」という小さな山奥の村があり、村人が仲良く暮らしていました。
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '🙂', '🌲']}
              description={<>ラムダ村の村人たち</>}
            />
            <P>
              ラムダ村には、代々伝わる「<HighlightBold>計算箱</HighlightBold>
              」という道具がありました。<Bold>計算箱</Bold>
              は、その名の通り<Highlight>算数の計算をしてくれる</Highlight>
              魔法の道具です。<Highlight>現代の電卓のようなもの</Highlight>
              だと思ってください。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  計算ができる魔法の道具「<HighlightBold>計算箱</HighlightBold>
                  」
                </>
              }
            />
            <P>
              この計算箱がどんなものか、説明しましょう！<Emoji>🤗</Emoji>
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>ちなみに:</Bold> 「ラムダ村」は、
                <Highlight>上から読んでも下から読んでも「ラムダ村」</Highlight>
                です。 なぜ「ラムダ」と名付けたかは最後に説明します！
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
              こちらをご覧ください。これが、ラムダ村の村人が使っていた「
              <HighlightBold>計算箱</HighlightBold>」のひとつです。
            </P>
            <R.Lizi>
              計算箱 <CustomEmoji type="mathBox" />
            </R.Lizi>
            <Ul>
              <UlLi>
                上には、数字の <EmojiNumber number={1} /> が入っています。
              </UlLi>
              <UlLi>
                下には、1を足す印 <CustomEmoji type="plusOne" />{' '}
                が入っています。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>1️⃣</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <P>では次に、この計算箱はどのように使うかを説明しましょう！</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'run' }} /> ボタン
          </>
        ),
        content: (
          <>
            <P>
              それぞれの計算箱には
              <HighlightBold>
                <H args={{ name: 'run' }} /> ボタン
              </HighlightBold>
              がついており、それを押すと計算が実行されます。試しに、下の計算箱で
              <HighlightBold>
                <H args={{ name: 'deprecatedPressRun' }} />
              </HighlightBold>
            </P>
            <R.Mcug />
            <P>
              <HighlightBold>
                結果は <EmojiNumber number={2} /> になりました
              </HighlightBold>
              。つまり、
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できたということです。
            </P>
            <Hr />
            <P>
              他の計算箱も見てみましょう！たとえばこちらをご覧になり、
              <HighlightBold>
                <H args={{ name: 'deprecatedPressRun' }} />
              </HighlightBold>
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
        title: <>1を足す機能</>,
        content: (
          <>
            <P>ここまでをまとめると、下の計算箱のように、</P>
            <R.Rviy />
            <Ul>
              <UlLi>
                <Highlight>
                  上に何らかの数字 <CustomEmoji type="blankNumber" />{' '}
                  が入っていて、
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  下に <CustomEmoji type="plusOne" /> が入っている場合、
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  <H args={{ name: 'run' }} /> すると結果は{' '}
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> になる
                </Highlight>
              </UlLi>
            </Ul>
            <P>ということです。</P>
            <R.Ymtp>
              <H args={{ name: 'run' }} /> すると結果は
              <br />
              <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> になる
            </R.Ymtp>
            <P>
              これが、計算箱に備わっている機能のひとつ、「
              <H args={{ name: 'plusOneFeature' }} />
              」です。この機能を使えば、
              <Highlight>
                何らかの数字に <EmojiNumber number={1} />{' '}
                を足す計算を行うことができる
              </Highlight>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  計算箱の<HighlightBold>1を足す機能:</HighlightBold>
                  <br />
                  何らかの数字に <EmojiNumber number={1} /> を足す
                </>
              }
            />
          </>
        )
      },
      {
        title: <>1を引く機能</>,
        content: (
          <>
            <P>
              計算箱は「1を足す」だけではなく、「
              <HighlightBold>1を引く</HighlightBold>
              」計算をすることもできます。こちらの計算箱を
              <H args={{ name: 'run' }} />
              してみてください:
            </P>
            <R.Xmqp />
            <P>
              結果は <EmojiNumber number={2} /> になりました。すなわち{' '}
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できたということです！
              <Emoji>🙂</Emoji>
            </P>
            <Hr />
            <P>
              このように、
              <Highlight>
                何らかの数字 <CustomEmoji type="blankNumber" /> の下に{' '}
                <CustomEmoji type="minusOne" /> が入っていると、
                <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={1} /> を計算することができる
              </Highlight>
              のです。
            </P>
            <R.Ditw>
              <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できる
            </R.Ditw>
            <P>
              これが、計算箱に備わっているふたつめの機能、「
              <H args={{ name: 'minusOneFeature' }} />
              」です。この機能を使えば、何らかの数字から{' '}
              <EmojiNumber number={1} /> を引く計算を行うことができるのです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="minusOne" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  計算箱の<HighlightBold>1を引く機能:</HighlightBold>
                  <br />
                  何らかの数字から <EmojiNumber number={1} /> を引く
                </>
              }
            />
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
              <HighlightBold>
                <CustomEmoji type="plusOne" /> と{' '}
                <CustomEmoji type="minusOne" /> だけです
              </HighlightBold>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="mathBox" />,
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
              description={<>これを計算したいときはどうすればいい？</>}
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
              <EmojiNumber number={2} /> を計算したい場合、
              <EmojiNumber number={2} /> に加えて{' '}
              <HighlightBold>
                <CustomEmoji type="plusOne" /> を2回
              </HighlightBold>
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
              こちらに <CustomEmoji type="plusOne" />{' '}
              を2回使った計算箱を用意したので、実際に試してみましょう。
              <H args={{ name: 'deprecatedPressRun' }} />
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
              <HighlightBold>
                <CustomEmoji type="plusOne" /> も{' '}
                <CustomEmoji type="minusOne" />{' '}
                も、どちらも何回でも使うことができます
              </HighlightBold>
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
              <HighlightBold>
                <CustomEmoji type="plusOne" /> を3回
              </HighlightBold>
              使うことで、
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算してくれます。
            </P>
            <R.Eagi>
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算
            </R.Eagi>
            <P>
              一方、下の計算箱は、
              <HighlightBold>
                <CustomEmoji type="minusOne" /> を4回
              </HighlightBold>
              使うことで、
              <EmojiNumber number={5} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={4} /> を計算してくれます。
            </P>
            <R.Yjur>
              <EmojiNumber number={5} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={4} /> を計算
            </R.Yjur>
          </>
        )
      },
      {
        title: <>どんな大きな数字の足し算でも引き算でも可能</>,
        content: (
          <>
            <P>
              つまり、
              <CustomEmoji type="plusOne" /> や <CustomEmoji type="minusOne" />{' '}
              を何度も使うことで、
              <Highlight>
                どんな大きな数字の足し算でも引き算でも可能なのです
              </Highlight>
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
              <EmojiNumber number={10} />{' '}
              を計算したかったら、どうすればいいでしょうか？
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={10} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={10} />
              ]}
            />
            <P>
              答えを言うと、
              <HighlightBold>
                <EmojiNumber number={10} /> の下に{' '}
                <CustomEmoji type="plusOne" />{' '}
                を10回配置した計算箱を実行すればいい
              </HighlightBold>
              のです。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を10回配置
            </R.Amoq>
            <P>
              このようにすれば、
              <Highlight>
                計算箱はどんな大きな数字の足し算でも引き算でもできます
              </Highlight>
              。<Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: <>ラムダ村の村人は計算がとても苦手</>,
        content: (
          <>
            <P>
              まとめると、
              <HighlightBold>
                計算箱は足し算や引き算を行ってくれる魔法の道具
              </HighlightBold>
              というわけです。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>➖</Emoji>
              ]}
              description={<>計算箱は足し算や引き算ができる</>}
            />
            <P>
              そして、ラムダ村の村人は
              <HighlightBold>計算がとても苦手でした</HighlightBold>。
              だから、たとえば「
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
              」のような単純な足し算をするのにも、村人たちは計算箱に頼りきっていました。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <Emoji>🙂</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🙂</Emoji>,
                <Emoji>🌲</Emoji>
              ]}
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
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>ちなみに:</Bold>{' '}
                <Highlight>
                  残念ながら、計算箱は「<HighlightBold>掛け算</HighlightBold>{' '}
                  <Emoji>✖️</Emoji>
                  」や「<HighlightBold>割り算</HighlightBold> <Emoji>➗</Emoji>
                  」を行うことはできませんでした。
                </Highlight>
              </P>
              <EmojiSeparator
                emojis={['✖️', '😭', '➗']}
                description={<>掛け算や割り算は、計算箱ではできない</>}
              />
              <P>
                しかし、計算が大の苦手だった村人たちにとって、足し算や引き算ができるだけでも大いにありがたいことでした。
              </P>
            </>
          )
        }
      },
      {
        title: <>3つめの計算箱の機能</>,
        content: (
          <>
            <P>
              <Highlight>
                実は計算箱には、今回紹介した「
                <H args={{ name: 'plusOneFeature' }} />
                」や「
                <H args={{ name: 'minusOneFeature' }} />
                」以外にも、
                <HighlightBold>さらにもうひとつ</HighlightBold>
                の機能があります。
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>❓</Emoji>
              ]}
              description={<>3つめの機能がある</>}
            />
            <P>
              次のページでは、計算箱の3つめの機能について紹介していきます！
              <Emoji>🤗</Emoji>
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
