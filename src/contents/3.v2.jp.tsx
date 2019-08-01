import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>悪魔、現る</>,
        content: (
          <>
            <P>
              平和だったラムダ村にある日とつぜん、
              <Strong>
                とても恐ろしい悪魔 <Emoji>😈</Emoji>
              </Strong>
              が現れました。
            </P>
            <EmojiSeparator emojis={['🌲', '😈', '🌲']} />
            <P>村人たちは、悪魔を見て震え上がりました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: (
                    <P>
                      ひぇぇ、何も悪いことしていないのに、悪魔がやってきた！
                    </P>
                  )
                },
                {
                  type: 'crying',
                  children: <P>もうおしまいだ！</P>
                }
              ]}
            />
            <P>悪魔はこうささやきました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <P>
                      安心しろ、お前たちの命だけは助けてやる…。だが、お前たちが大事にしている
                      <Strong>
                        計算箱 <Emoji>🎁</Emoji>
                      </Strong>
                      <Em> は、すべて没収させてもらうぞ！</Em>
                    </P>
                  )
                },
                {
                  type: 'scared',
                  children: <P>エッ！計算箱を没収だって？そんな無慈悲な！</P>
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>なぜ計算箱を没収？</>,
        content: (
          <>
            <P>
              こうして悪魔は、
              <Strong>ラムダ村から計算箱を取り上げてしまったのです。</Strong>
            </P>
            <EmojiSeparator emojis={['🌲', '😈', '🎁', '🌲']} />
            <P>ラムダ村からは、計算箱がすべて無くなってしまいました。</P>
            <R.Rviy children="cross" />
            <P>
              足し算や引き算をするのに計算箱に頼り切っていた村人たちは嘆きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <P>悪魔め、どうしておれたちから計算箱を取り上げるんだ！</P>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <P>
                      <Em>おれたちは計算が大の苦手なんだ。</Em>
                      計算箱がないと、足し算や引き算ができなくなって、村の経済活動が成り立たなくなるんだぞ！
                    </P>
                  )
                }
              ]}
            />
            <P>悪魔は答えます。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Strong>
                          計算箱を取り上げたのは、お前たちが計算が苦手だからだよ。
                        </Strong>
                      </P>
                      <P>
                        お前たちは簡単な計算をするのにでも計算箱に頼り切っているだろう。そんなことだから、いつまでたっても計算が上達しないんだ。
                      </P>
                      <P>
                        <Em>
                          計算箱を取り上げることで、お前たちが計算を勉強するきっかけをわたしは作ってやったのさ。
                        </Em>
                        感謝するんだな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>そんな…勉強なんてしたくないよ！</P>
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>悪魔からの挑戦状</>,
        content: (
          <>
            <P>
              なんとか計算箱を返してもらえないか、村人たちは悪魔にお願いしました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <P>お願いだ、何でもするから計算箱を返してくれないか？</P>
                  )
                },
                {
                  type: 'crying',
                  children: <P>頼む、この通りだ！</P>
                },
                {
                  type: 'devil',
                  children: (
                    <P>
                      ふむ…そこまで言うなら仕方ない。では、
                      <Strong>お前たちにチャンスをやろう！</Strong>
                    </P>
                  )
                }
              ]}
            />
            <P>悪魔が言うチャンスとは、どういうことなのでしょうか？</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Em>
                          これから、
                          <Strong>頭を使わないと解けないパズル</Strong>
                          をたくさん出題する。
                          <Strong>
                            すべて解けたら、計算箱を返してやってもいいぞ！
                          </Strong>
                        </Em>
                      </P>
                      <P>
                        日頃から頭を使ってこなかったお前たちには、おそらくムリだろうがな！わはは！
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>パ、パズルだって…？おれたちに解けるかなあ？</P>
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        難しそう…しかし、やるしかない！計算箱を取り返すんだ！
                      </P>
                      <P>
                        <Em>悪魔よ、その挑戦、受けて立つぞ！</Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ほほう…いい度胸だ。では、はじめよう！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              こうして、村人たちは計算箱を返してもらうべく、悪魔が出題するパズルに挑戦することになりました。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        お前たちが解くパズルは、{' '}
                        <Strong>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                        </Strong>
                        というものだ。そして、これがその
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              <H args={{ name: 'bentoBoxPuzzle' }} /> の一例
            </R.Ilpo>
            <Ul>
              <UlLi>
                このように、
                <H args={{ name: 'bentoBoxPuzzle' }} />
                には、実際の弁当箱のように、
                <Em>
                  四角の中にいくつかマスがあり、それぞれのマスの中に料理が入っています
                </Em>
                。
              </UlLi>
              <UlLi>
                上段には
                <EmojiWithText letter="b" />
                が入っており、
              </UlLi>
              <UlLi>
                下段には
                <EmojiWithText letter="a" />
                がふたつ入っています。
              </UlLi>
            </Ul>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        なんとなく、
                        <Em>見た目が計算箱に似ている気がするなあ。</Em>
                        数字の代わりに、料理が入っているけど。
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
      // Show 2 puzzles and ask what the pattern is.
    ]}
  />
)
