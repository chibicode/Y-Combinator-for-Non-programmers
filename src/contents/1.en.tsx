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
    underConstruction
    cards={[
      {
        title: <>Welcome!</>,
        content: (
          <>
            <P>
              In this course, we’ll learn about Y Combinator through a short
              story. Let’s first talk about <Strong>“mathboxes”</Strong>, one of
              the key items of this story.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>This is the icon for mathboxes.</>}
            />
          </>
        )
      },
      {
        title: <>Once upon a time…</>,
        content: (
          <>
            <P>
              Once upon a time, there was a rural village called{' '}
              <Strong>“Lambda Village”</Strong>. The villagers worked to earn
              just enough for a modest lifestyle.
            </P>
            <EmojiSeparator
              emojis={['🌲', '🙂', '🙂', '🌲']}
              description={<>Lambda Village and the villagers</>}
            />
            <P>
              In Lambda Village, a tool called <Strong>“Mathbox”</Strong> has
              been passed down from one generation to next. As its name
              suggests, <InlineHeader>Mathbox</InlineHeader> is a magical tool
              that can solve <Em>math questions</Em>. You can think of it as a{' '}
              <Em>simple calculator</Em>.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  <Strong>Mathbox</Strong> is a magical tool that can do math.
                </>
              }
            />
            <P>Let me explain how mathbox works!</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>Note:</InlineHeader> Later, I’ll explain why the
                village is named after “lambda”, the 11th letter of the Greek
                alphabet.
              </P>
            </>
          )
        }
      },
      {
        title: <>How mathboxes work</>,
        content: (
          <>
            <P>
              Here’s an example <Strong>mathbox</Strong>:
            </P>
            <R.Lizi>
              Mathbox <CustomEmoji type="mathBox" />
            </R.Lizi>
            <Ul>
              <UlLi>
                There’s <EmojiNumber number={1} /> on the top, and
              </UlLi>
              <UlLi>
                There’s an “add one” icon <CustomEmoji type="plusOne" /> on the
                bottom.
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>1️⃣</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
            />
            <P>
              Next, we’ll talk about how we can{' '}
              <H args={{ name: 'play', lowerCase: true }} /> this mathbox.
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'play' }} /> Button
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
        title: <>1を足す機能</>,
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
            <P>
              これが、計算箱に備わっている機能のひとつ、「
              <H args={{ name: 'plusOneFeature' }} />
              」です。この機能を使えば、
              <Em>
                何らかの数字に <EmojiNumber number={1} />{' '}
                を足す計算を行うことができる
              </Em>
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
                  計算箱の<Strong>1を足す機能:</Strong>
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
              計算箱は「1を足す」だけではなく、「<Strong>1を引く</Strong>
              」計算をすることもできます。こちらの計算箱を
              <H args={{ name: 'play' }} />
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
              <Em>
                何らかの数字 <CustomEmoji type="blankNumber" /> の下に{' '}
                <CustomEmoji type="minusOne" /> が入っていると、
                <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
                <EmojiNumber number={1} /> を計算することができる
              </Em>
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
                  計算箱の<Strong>1を引く機能:</Strong>
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
              <Strong>
                <CustomEmoji type="plusOne" /> と{' '}
                <CustomEmoji type="minusOne" /> だけです
              </Strong>
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
              こちらに <CustomEmoji type="plusOne" />{' '}
              を2回使った計算箱を用意したので、実際に試してみましょう。
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
            <R.Eagi>
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算
            </R.Eagi>
            <P>
              一方、下の計算箱は、
              <Strong>
                <CustomEmoji type="minusOne" /> を4回
              </Strong>
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
              <Em>どんな大きな数字の足し算でも引き算でも可能なのです</Em>。
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
              <Strong>
                <EmojiNumber number={10} /> の下に{' '}
                <CustomEmoji type="plusOne" />{' '}
                を10回配置した計算箱を実行すればいい
              </Strong>
              のです。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を10回配置
            </R.Amoq>
            <P>
              このようにすれば、
              <Em>計算箱はどんな大きな数字の足し算でも引き算でもできます</Em>。
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
              <Strong>計算箱は足し算や引き算を行ってくれる魔法の道具</Strong>
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
              そして、ラムダ村の村人は<Strong>計算がとても苦手でした</Strong>。
              だから、たとえば「
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} />
              」のような単純な足し算をするのにも、村人たちは計算箱に頼りきっていました。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🙂</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🙂</Emoji>
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
                <InlineHeader>ちなみに:</InlineHeader>{' '}
                <Em>
                  残念ながら、計算箱は「<Strong>掛け算</Strong>{' '}
                  <Emoji>✖️</Emoji>
                  」や「<Strong>割り算</Strong> <Emoji>➗</Emoji>
                  」を行うことはできませんでした。
                </Em>
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
              <Em>
                実は計算箱には、今回紹介した「
                <H args={{ name: 'plusOneFeature' }} />
                」や「
                <H args={{ name: 'minusOneFeature' }} />
                」以外にも、
                <Strong>さらにもうひとつ</Strong>
                の機能があります。
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>❓</Emoji>
              ]}
              description={<>3つめの機能がある</>}
            />
            <P>次のページでは、計算箱の3つめの機能について紹介していきます！</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
