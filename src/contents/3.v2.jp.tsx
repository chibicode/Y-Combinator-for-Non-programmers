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
              ある日とつぜん、ラムダ村に
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
                安心しろ、貴様らの命だけは助けてやる…。だが、貴様らが大事にしている
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
      }
      // Looks like the devil is after the math box
      // Crying: why are you taking the math boxes from us?
    ]}
  />
)
