import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>サヤちゃんの疑問</>,
        content: (
          <>
            <P>
              サヤちゃんは、
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱について、あることに気が付きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>ねえねえ、見てほしいものがあるんだけど。</P>
                      <P>
                        まず、
                        <Em>
                          これは <EmojiNumber number={1} /> に変換できる弁当箱
                        </Em>
                        だよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>うん、そうだけど、それがどうしたの？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        これを、前回わたしが考えた
                        <H args={{ name: 'plusOneEffect' }} />
                        と合体させて、
                        <H args={{ name: 'runAndConertToMathbox' }} />{' '}
                        すると、どうなると思う？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              <H args={{ name: 'plusOneEffect' }} />
              と合体させて、
              <br />
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              するとどうなる？
            </R.Nhqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        そりゃあ、
                        <Em>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できるんだから、
                          <EmojiNumber number={2} /> になるに決まっている
                        </Em>
                        だろう？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  結果は <EmojiNumber number={2} /> になるはず…？
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <H args={{ name: 'play' }} />
                        してみてよ！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>実行してみると…</>,
        content: (
          <>
            <P>
              それでは、
              <H args={{ name: 'pressFastForward', skippable: true }} />
            </P>
            <R.Akik />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実行を終えたので、
                        <H args={{ name: 'convert', type: 'toMathBox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <Strong>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Auks>計算箱に変換できない</R.Auks>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        理由はもちろん、
                        <Em>以下の法則に沿っていないからです。</Em>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Em>
                          右上には <Emoji>🅱️</Emoji> の料理が「
                          <Strong>ひとつだけ</Strong>
                          」ある必要があります。しかし、
                          <Em>
                            ここでは <Emoji>🅱️</Emoji> の料理が
                            <Strong>ふたつ</Strong>もある
                          </Em>
                          ので、計算箱に変換できないのです。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqwp>
              右上に <Emoji>🅱️</Emoji> がふたつあるので、
              <br />
              計算箱に変換できない
            </R.Vqwp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        お、おかしい…なんで <EmojiNumber number={2} />{' '}
                        に変換できる弁当箱にならないんだ？前回はちゃんとできていたのに…
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>前回と比較してみよう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、前回と比較してみましょう。前回実行したのは、こちらの弁当箱でした。
                      </P>
                      <P>
                        <Strong>
                          先ほどと唯一違うのは、上の部分に{' '}
                          <EmojiWithText letter="b" /> のかわりに{' '}
                          <EmojiWithText letter="e" /> が入っている
                        </Strong>
                        ところです。(<Em>黄色</Em>で示しています)
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Exbn>
              <Strong>前回実行した弁当箱:</Strong>
              <br />
              上の部分は <EmojiNumber number={1} /> に変換できる。
              <br />
              <Em>
                先ほどと違うのは、上の <EmojiForLetter letter="e" /> の部分。
              </Em>
              <br />
              下の部分は先ほどと同じ。
            </R.Exbn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        こちらは、最終的に <EmojiNumber number={2} />{' '}
                        に変換できる弁当箱になりますね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rico>
              <H
                args={{ name: 'canBeConvertedCaption', number: 2, letter: 'b' }}
              />
            </R.Rico>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、どうして結果に違いが出るんだろう？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneEffect' }} />
            が失敗する唯一のケース
          </>
        ),
        content: <></>
      }
    ]}
  />
)
