import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, InlineHeader } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>中級編へようこそ！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここからは中級編だ。
                        <Em>
                          約束した通り、これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、やってやる！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        問題を出す前に、わたしの<Strong>助手</Strong>
                        をここに呼ばせてもらおう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なに、お前の助手だって？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>いま呼ぶから、ちょっと待つんだな。</P>
                      <P>
                        …いでよ、「<Strong>ベンケイ</Strong>」！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={<Strong>悪魔の助手・ベンケイ、ここに参上！</Strong>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <InlineHeader>ワン！</InlineHeader>
                        (どうも、ベンケイです。お呼びですか、悪魔様？)
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        よく来てくれた！こいつがわたしの助手、
                        <Strong>ベンケイ</Strong>だ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>なんだ、ただのわんこじゃないか。</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ベンケイはただの犬じゃない。特殊な芸を持っているからな。
                      </P>
                      <P>ベンケイ、こいつらにその芸を見せてやるんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <InlineHeader>ワンワン！</InlineHeader>(わかりました！)
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)
