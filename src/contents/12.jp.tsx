import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { Hr, P, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EmojiWithText from 'src/components/EmojiWithText'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <EmojiWithText letter="u" />
            が増えていく
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.bcso}
            <P>
              この
              <InlineEmojiBoxesForQuestion />
              の部分に、
              <EmojiWithText letter="u" />
              を入れてみました。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.klah}
            <P>
              最終的に
              <EmojiWithText letter="u" />が<Strong>ふたつ</Strong>
              になりました。
            </P>
            {AER.agso}
            <P>
              次に、
              <Strong>
                このふたつの
                <EmojiWithText letter="u" />
                を、もう一度先ほどの
                <H args={{ name: 'bentoBox', skipEmoji: true }} />の
                <InlineEmojiBoxesForQuestion />
                の部分に入れてみました
              </Strong>
              。もう一度、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.hqbn}
            <P>
              今度は、最終的に
              <EmojiWithText letter="u" />が<Strong>3つ</Strong>
              になりました。
            </P>
            {AER.wnxr}
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
            <P>
              つまり、この
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に、
            </P>
            {AER.qiri}
            <P>
              <Strong>
                <EmojiWithText letter="u" />
                をひとつ入れて
              </Strong>
              <H args={{ name: 'play' }} />
              すると、最終的に
              <Strong>
                <EmojiWithText letter="u" />
                の数がふたつになります
              </Strong>
              。
            </P>
            {AER.oyde}
            <P>
              そして、
              <Strong>これを繰り返すことで…</Strong>
            </P>
            {AER.caqd}
            <P>
              <Strong>
                毎回
                <EmojiWithText letter="u" />
                の数がひとつずつ増えていきます。
              </Strong>
            </P>
            {AER.uixu}
          </>
        )
      }
    ]}
  />
)
