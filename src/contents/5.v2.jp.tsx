import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong,
  Ul,
  UlLi,
  InlineHeader
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import InlineBackground from 'src/components/InlineBackground'
import BottomRightBadge from 'src/components/BottomRightBadge'
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
      },
      {
        title: (
          <>
            先に<InlinePrioritiesLabel>1</InlinePrioritiesLabel>のペアに注目
          </>
        ),
        content: (
          <>
            <P>
              3段の
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を解く際には、まず
              <Strong>
                左上と左下に
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                の印がある部分に注目します。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Aaov />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                        のペアがピンク色の
                        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
                        になり、一番上の背景が暗い色{' '}
                        <InlineBackground bgColor={'indigo50'} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <Em>
                          暗い色 <InlineBackground bgColor={'indigo50'} />{' '}
                          の部分は無視して、
                          <InlinePrioritiesLabel revert>
                            1
                          </InlinePrioritiesLabel>
                          のペアの部分に注目する
                        </Em>
                        ということか。
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
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
            、そして
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
          </>
        ),
        content: (
          <>
            <P>
              次に、<InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペアの部分に{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              などの印をつけます。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Qxob />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <Em>
                          下段真ん中の <EmojiWithText letter="b" /> には、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          の印がついた！
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そう、前回では登場しなかったが、
                        <Em>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          のどれにも該当しない、
                          <Strong>下段の真ん中にある料理</Strong>には{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          をつけるんだ。
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
                        なるほど。じゃあ、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        がついた料理はどうなるんだ？
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
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
            は無視していい
          </>
        ),
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の印がついた料理は、<Strong>いったん無視してください</Strong>。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🙄</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  はいったん無視する
                </>
              }
            />
            <P>前回も話した通り、続いて以下のステップを行いますが、</P>
            <Ul>
              <UlLi>
                <InlineHeader>一致チェック:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji>
              </UlLi>
              <UlLi>
                <InlineHeader>コピーする:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>↘️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              </UlLi>
              <UlLi>
                <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              </UlLi>
            </Ul>
            <P>
              <Em>
                どれも{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                は関係ありません。だから、無視していいのです。
              </Em>
            </P>
          </>
        )
      }
    ]}
  />
)
