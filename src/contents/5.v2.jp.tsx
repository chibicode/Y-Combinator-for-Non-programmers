import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>3段の弁当箱</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここからは、より複雑な
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        を解いてもらおう。たとえば、こういうパズルだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cvtc />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        これは…
                        <Em>
                          今までの弁当箱は縦に2段しかなかったけれど、
                          <Strong>この弁当箱には縦に3段ある</Strong>ぞ。
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          一番下には
                          <EmojiWithText letter="a" />、
                          <EmojiWithText letter="b" />、
                          <EmojiWithText letter="a" />
                          と横に3つの料理が並んでいる。
                        </Strong>
                      </P>
                      <P>
                        今までの弁当箱では、
                        <Em>横に3つの料理が並んだことはなかった</Em>。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだな。そしてさらに、
                        <Em>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> や{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                          という数字が左端に表示されている
                        </Em>
                        のに気づいたかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>たしかに。</P>
                      <P>こういうパズルは、どうやって解けばいいんだろう？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ではまず、こういった3段の
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        の解き方を説明しよう。
                      </P>
                      <P>
                        そして
                        <Em>
                          説明した後に、
                          <H args={{ name: 'yesNoQuiz' }} />
                          を出題し、お前たちに自力で解いてもらう
                        </Em>
                        ぞ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よし、やってやる！</P>
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
