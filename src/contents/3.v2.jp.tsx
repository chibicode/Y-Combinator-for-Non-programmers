import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import BubbleQuote from 'src/components/BubbleQuote'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>悪魔が現れた</>,
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
            <P>村人たちは震え上がりました。</P>
            <BubbleQuote type="scared">
              <P>ひぇぇ、何も悪いことしていないのに、悪魔がやってきた！</P>
            </BubbleQuote>
            <BubbleQuote type="crying">
              <P>もうおしまいだ！</P>
            </BubbleQuote>
            <P>悪魔はこうささやきました。</P>
            <BubbleQuote type="devil">
              <P>
                安心しろ、お前たちの命だけは助けてやる…。だが、お前たちが大事にしている
                <Strong>
                  計算箱 <Emoji>🎁</Emoji>
                </Strong>
                <Em> は、すべて没収させてもらうぞ！</Em>
              </P>
            </BubbleQuote>
            <BubbleQuote type="scared">
              <P>エッ！計算箱を没収だって？そんな無慈悲な！</P>
            </BubbleQuote>
          </>
        )
      },
      {
        title: <>なぜ計算箱を没収？</>,
        content: (
          <>
            <P>
              こうして悪魔は、
              <Strong>ラムダ村から計算箱を奪い取ってしまったのです。</Strong>
            </P>
            <EmojiSeparator emojis={['🌲', '😈', '🎁', '🌲']} />
            <P>
              足し算や引き算をするのに計算箱に頼り切っていた村人たちは嘆きました。
            </P>
            <BubbleQuote type="crying">
              <P>悪魔め、どうしてわたしたちから計算箱を取り上げるんだ！</P>
            </BubbleQuote>
            <BubbleQuote type="sad">
              <P>
                <Em>わたしたちは計算が大の苦手なんだ。</Em>
                計算箱がないと、足し算や引き算ができなくて、村の経済活動が成り立たなくなるんだぞ！
              </P>
            </BubbleQuote>
            <P>悪魔は答えます。</P>
            <BubbleQuote type="devil">
              <P>
                <Strong>
                  計算箱を奪ったのは、お前たちが計算が苦手だからだよ。
                </Strong>
              </P>
              <P>
                お前たちは簡単な計算をするのにでも計算箱に頼り切っているだろう。そんなことだから、いつまでたっても計算が上達しないんだ。
              </P>
              <P>
                <Em>
                  計算箱を奪うことで、お前たちが計算を勉強するきっかけをわたしは作ってやったのさ。
                </Em>
                感謝するんだな！
              </P>
            </BubbleQuote>
            <BubbleQuote type="sad">
              <P>そんな…勉強なんてしたくないよ！</P>
            </BubbleQuote>
          </>
        )
      },
      {
        title: <></>,
        content: <></>
      }
    ]}
  />
)
