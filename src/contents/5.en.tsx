import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong,
  Ul,
  UlLi,
  Ol,
  OlLi,
  InlineHeader,
  Hr
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import InlineBackground from 'src/components/InlineBackground'
import BottomRightBadge from 'src/components/BottomRightBadge'
import YesNoButtons from 'src/components/YesNoButtons'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export const ThreeRowRules = () => (
  <>
    <P>
      <InlineHeader>3段以上の弁当箱は、以下のように解きます。</InlineHeader>
    </P>
    <Ol>
      <OlLi>
        <Em>
          まず先に <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアからはじめる。
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          下段の真ん中にある料理には{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
          をつける。
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
          は、いったん無視して構わない。
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> のペアが終わると、
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          になるので、また繰り返す。
        </Em>
      </OlLi>
    </Ol>
    <R.Vdhd>3段の弁当箱</R.Vdhd>
  </>
)

export const Beginner5Rules = () => (
  <>
    <P>
      <InlineHeader>細かい法則1:</InlineHeader>{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
      のペアが左右ふたつ以上ある場合は、
      <Strong>一番左のペアからはじめます。</Strong>
    </P>
    <R.Hykj>
      <H args={{ name: 'startWithLeftMostOneCaption' }} />
    </R.Hykj>
    <P>
      <InlineHeader>補足:</InlineHeader>{' '}
      <Em>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
        のペアが弁当箱の左端にない場合は、内側の{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel> のペアからはじめる。
      </Em>
    </P>
    <R.Myjz>
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
      のペアが弁当箱の左端にない場合は、
      <br />
      内側の <InlinePrioritiesLabel>1</InlinePrioritiesLabel> のペアからはじめる
    </R.Myjz>
    <Hr />
    <P>
      <InlineHeader>細かい法則2:</InlineHeader> 下段にひとつの料理しかなく、
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
      のペアからはじめられない場合、
      <Strong>
        <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアからはじめます。
      </Strong>
    </P>
    <R.Zemy>
      <H args={{ name: 'startWithTwoCaption' }} />
    </R.Zemy>
  </>
)

const WillReturn = () => (
  <>
    <EmojiSeparator
      emojis={['❓', '😈', '❓']}
      noBottomMargin
      description={
        <>
          次の中級編で難しい問題を出題する。
          <br />
          このページで学んだ内容で解けるはず！
        </>
      }
    />
    <EmojiSeparator
      noTopMargin
      nodes={[
        <Emoji>✨</Emoji>,
        <CustomEmoji type="mathBox" />,
        <Emoji>✨</Emoji>
      ]}
      description={<>解けたら計算箱を返してやろう！</>}
    />
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>初級最後です！ちょっと難しいかも</>,
        content: (
          <>
            <P>
              <Strong>今回が初級最後のページです！</Strong>
              ここまで読んでくださり、ありがとうございます！
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>初級最後のページです！</>}
            />
            <P>
              <Em>今回登場する弁当箱は、今までと比べてちょっと難しいです。</Em>
              しかし、ここまで来たあなたなら読み進められるはずです。諦めずにチャレンジしてみてください！
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={
                <>
                  ちょっと難しいですが、
                  <br />
                  あなたなら大丈夫！
                </>
              }
            />
          </>
        )
      },
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
            <R.Cvtc>
              3段の
              <H args={{ name: 'bentoBoxPuzzle' }} />
            </R.Cvtc>
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
                }
              ]}
            />
            <R.Cvtc>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel> や{' '}
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
              という数字が
              <br />
              左端に表示されているのにも注目
            </R.Cvtc>
            <BubbleQuotes
              quotes={[
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
                          解き方を説明した後に、
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
            先に <InlinePrioritiesLabel>1</InlinePrioritiesLabel> のペアに注目
          </>
        ),
        content: (
          <>
            <P>
              3段の
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を解く際には、まず
              <Strong>
                左上と左下に <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                の印がある部分に注目します。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  先に <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアに注目
                </>
              }
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
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                        のペアがピンク色の{' '}
                        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
                        になり、一番上の背景が暗い色{' '}
                        <InlineBackground bgColor={'indigo50'} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そう。これは、
                        <Em>
                          暗い色 <InlineBackground bgColor={'indigo50'} />{' '}
                          の部分は無視して、
                          <InlinePrioritiesLabel revert>
                            1
                          </InlinePrioritiesLabel>{' '}
                          のペアの部分に注目する
                        </Em>
                        ということだ。
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
              次に、<InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
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
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <EmojiForLetter letter="b" />
              ]}
              description={
                <>
                  下段の真ん中には{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  をつける
                </>
              }
            />
            <BubbleQuotes
              quotes={[
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
                は関係ありませんよね。だから、
                <Strong>
                  次のいくつかのステップの間は{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  を無視していい
                </Strong>
                のです。
              </Em>
            </P>
            <R.Pbhg>
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" /> の
              <EmojiWithText letter="b" /> は、
              <br />
              次のいくつかのステップの間は無視していい
            </R.Pbhg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>なるほど。じゃあ、続きを見ていこう！</P>
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
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
            のペア部分を終わらせる
          </>
        ),
        content: (
          <>
            <P>
              では、<InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              のペア部分を終わらせましょう。やり方は前回と同じです。
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
                  のペア部分を終わらせる
                </>
              }
            />
            <P>
              まず、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                が一致するかチェックし、一致した料理には <Emoji>✅</Emoji>{' '}
                を付けます。
              </Strong>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Wwtl />
            <P>
              続いて、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                の料理を、一致した{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                の部分にコピーします。
              </Strong>
            </P>
            <R.Ltpe />
            <P>
              最後に、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                が消えます。
              </Strong>
            </P>
            <R.Apuz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Em>
                          上記のどのステップにおいても、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          は関係なかった
                        </Em>
                        だろう？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、だから、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        はいったん無視していいのか。
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
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel> が消え、
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> に
          </>
        ),
        content: (
          <>
            <P>
              さらに続きを見ていきましょう。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Uwma />
            <Ul>
              <UlLi>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                が消えると同時に、
              </UlLi>
              <UlLi>
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel> が消え、
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel> になりました。
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>,
                <CustomEmoji type="singleArrow" />,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            残った<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            のペアを終わらせる
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        残った弁当箱は、前のページで見たのと同じようなやつだ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jwue>残った弁当箱はシンプルな2段</R.Jwue>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだ。そして、先ほど{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        だった
                        <EmojiWithText letter="b" /> に、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        の印がついているのに注目だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Sgnp>
              <EmojiWithText letter="b" /> が{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> に
            </R.Sgnp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        あとは前回とやり方は変わらない。
                        <H args={{ name: 'fastForward' }} />{' '}
                        で最後まで見てみよう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Kvso />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        最後に <EmojiWithText letter="c" /> が残った！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>これで終了だ！どうだ、理解できたかな？</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、なんとなく…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では復習のために、最初から最後まで
                        <H args={{ name: 'fastForward' }} /> で見てみよう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Beiz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>まとめると、</P>
                      <Ol>
                        <OlLi>
                          <Em>
                            まず先に{' '}
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                            のペアからはじめる。
                          </Em>
                        </OlLi>
                        <OlLi>
                          <Em>
                            下段の真ん中にある料理には{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />{' '}
                            をつける。
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />{' '}
                            は、いったん無視して構わない。
                          </Em>
                        </OlLi>
                        <OlLi>
                          <Em>
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                            のペアが終わると、
                            <InlinePrioritiesLabel>
                              2
                            </InlinePrioritiesLabel> が{' '}
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                            になるので、また繰り返す。
                          </Em>
                        </OlLi>
                      </Ol>
                      <P>こんなところかな？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通り。では、
                        <Strong>
                          そろそろ <H args={{ name: 'yesNoQuiz' }} />
                          の時間だ！
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>えー、ちゃんと解けるか、不安だなあ…</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Dkiy />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Yiri />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <H args={{ name: 'theAnswerIs', isYes: true }} />{' '}
                          だと思う！
                        </Strong>
                        最後には
                        <EmojiWithText letter="h" />
                        が残るはずだ。
                      </P>
                      <P>
                        <H args={{ name: 'fastForward' }} /> で見てみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              では、
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Hdxc />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！最後に
                        <EmojiWithText letter="h" />
                        が残ったので、<Emoji>⭕️</Emoji> が正解だ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ぐぬぬ…やるじゃないか！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>ふたつの細かい法則</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'wink',
                  children: (
                    <>
                      <P>どうだ、そろそろ計算箱を返す気になったか？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        まだドヤ顔をするような時間じゃないぞ。弁当箱の「
                        <Strong>細かい法則</Strong>
                        」に関する問題を出していないからな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  弁当箱の「
                  <Strong>細かい法則</Strong>
                  」？
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        弁当箱の「
                        <Strong>細かい法則</Strong>
                        」だって？何のことだ？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        まず、こちらの
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        を見てみな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Laea>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアが左右ふたつある
            </R.Laea>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        今まで見たことない形のパズルだ。
                        <Strong>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアが左右ふたつある
                        </Strong>
                        なあ…
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        続いて、こちらの
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        を見てみな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gtdu>
              一番下の料理が
              <EmojiWithText letter="b" />
              ひとつだけ
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これも見たことない形だなあ…
                        <Strong>
                          一番下に入っている料理が
                          <EmojiWithText letter="b" />
                          ひとつだけだ。
                        </Strong>
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
        title: <>細かい法則を知らないと解けない</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        上で紹介したようなパズルを解くには、これから紹介する弁当箱の「
                        <Strong>細かい法則</Strong>
                        」を知っておかないといけない。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  弁当箱の「
                  <Strong>細かい法則</Strong>
                  」を
                  <br />
                  知らないと解けない
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Em>その法則はふたつある。</Em>
                        順番に紹介していこう！もちろん、
                        <H args={{ name: 'yesNoQuiz' }} />
                        もやるからな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        えー、また <H args={{ name: 'yesNoQuiz' }} />
                        か！いつになったら計算箱を返してくれるんだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        まあそう焦るな。
                        <Em>
                          <Strong>
                            次からはじまる中級編で、とても難しい問題を出題する。
                          </Strong>
                          このページで紹介した法則を応用すれば解ける問題だ。それに答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <WillReturn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        え、ということはもうすぐ計算箱を返してもらえるのか！じゃあ、あと少し頑張ろう！
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
            細かい法則その1: 一番左の{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              まずは、こちらの
              <H args={{ name: 'bentoBoxPuzzle' }} />
              から見ていきましょう。
            </P>
            <R.Laea>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアが左右ふたつある
            </R.Laea>
            <P>
              <InlineHeader>細かい法則その1:</InlineHeader>{' '}
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが左右ふたつ以上ある場合は、
                <Strong>一番左側にある</Strong>{' '}
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </Em>
            </P>
            <R.Aezk>
              <Strong>一番左側にある</Strong>{' '}
              <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
              のペアからはじめる
            </R.Aezk>
            <P>
              では、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              はどうなるのか見ていきましょう。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              まず、上の <EmojiWithText letter="a" /> には{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              の印がつきます。
            </P>
            <R.Igrl />
            <P>
              次に、左の
              <EmojiWithText letter="b" />
              には <BottomRightBadge
                inline
                bottomRightBadgeType="funcArg"
              />{' '}
              の印がつきます。
            </P>
            <R.Uppk />
            <P>
              そして、右の
              <EmojiWithText letter="b" /> と<EmojiWithText letter="c" /> には{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              の印がつきます。
            </P>
            <R.Qfbk />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここでは、
                        <EmojiWithText letter="b" /> にも{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        がついたのに注目だ。
                      </P>
                      <P>
                        <Strong>
                          弁当箱の右端に接している料理にはすべて{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          の印がつく
                        </Strong>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              最後に、残った
              <EmojiWithText letter="c" /> には{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の印がつきます。
            </P>
            <R.Yfwd />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>
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
                          のどれにも該当しない場合には{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          の印がつく
                        </Strong>
                        んだな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              そして、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              にある
              <EmojiWithText letter="b" /> が一致するので…
            </P>
            <R.Dtzu />
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> にある
              <EmojiWithText letter="a" /> が、
              <BottomRightBadge inline bottomRightBadgeType="funcBound" /> の
              <EmojiWithText letter="b" /> のところにコピーされます。
            </P>
            <R.Vilr />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど、けっこう難しいなあ。</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              では、ここからは
              <H args={{ name: 'fastForward' }} /> で見ていきましょう！
            </P>
            <R.Izgz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        最後は
                        <EmojiWithText letter="a" /> だけが残った！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだ。理解できたかな？では、ここで{' '}
                        <H args={{ name: 'yesNoQuiz' }} />
                        の時間だ！
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Wcer />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Mqvu />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <H args={{ name: 'theAnswerIs', isYes: false }} />{' '}
                          だと思う！
                        </Strong>
                        最後には
                        <EmojiWithText letter="a" /> ではなく、
                        <EmojiWithText letter="d" /> が残るはずだ。
                      </P>
                      <P>
                        <H args={{ name: 'fastForward' }} /> で見てみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              では、
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Thkn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！最後に
                        <EmojiWithText letter="a" />
                        ではなく
                        <EmojiWithText letter="d" />
                        が残ったので、<Emoji>❌</Emoji> が正解だ！
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
        type: 'sideNote',
        title: (
          <>
            補足: 左端に <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
            のペアがない場合
          </>
        ),
        content: (
          <>
            <P>
              ここで補足です。まず、下の弁当箱をご覧ください。先ほどの{' '}
              <H args={{ name: 'yesNoQuiz' }} />
              で登場した弁当箱とほとんど同じですが、
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが弁当箱の左端になく、内側だけにあります。
              </Em>
            </P>
            <R.Dhzf>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアが弁当箱の左端になく、
              <br />
              内側だけにある
            </R.Dhzf>
            <P>
              このような場合、
              <Em>
                内側の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアの部分からはじめます。
              </Em>
            </P>
            <R.Mhyv>
              内側の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアからはじめる
            </R.Mhyv>
            <P>
              残りは
              <H args={{ name: 'fastForward' }} /> で見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Ayok />
            <P>
              まとめると、
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが弁当箱の左端にない場合は、内側の{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめればいい
              </Em>
              のです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            細かい法則その2: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
            のペアのからはじめられない場合、
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              続いて、こちらの
              <H args={{ name: 'bentoBoxPuzzle' }} />
              をご覧ください。
            </P>
            <R.Gtdu>
              一番下の料理が
              <EmojiWithText letter="b" /> ひとつだけ
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この弁当箱は、
                        <Strong>
                          一番下の段の料理が
                          <EmojiWithText letter="b" /> だけ
                        </Strong>
                        なのに注目だ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに…仮に{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                        のペアからはじめるとしたら、
                      </P>
                      <P>
                        この
                        <EmojiWithText letter="b" />
                        には、
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          のうち、どの印をつければいいのだろう？
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jmmp>
              <EmojiWithText letter="b" /> には、
              <br />
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              のうちどの印をつければいい？
            </R.Jmmp>
            <P>
              答えは、「<Strong>どの印もつけることができない</Strong>
              」です。
              <Em>
                一番下の段にひとつしか料理がない場合、どの印をつけることもできないのです
              </Em>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <EmojiForLetter letter="b" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <EmojiWithText letter="b" /> には、
                  <br />
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="funcArg"
                  />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  のどれもつけられない
                </>
              }
            />
            <P>
              ということはつまり、
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめることができない
              </Em>
              、ということになります。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアからはじめられない
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>じゃあ、どうすればいいんだ？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <InlineHeader>答え:</InlineHeader> 上記のように{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアからはじめられない場合は、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </Strong>
            </P>
            <R.Dqey>
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
              のペアからはじめる
            </R.Dqey>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                        のペアからはじめれば、
                        <Em>
                          下の段に
                          <EmojiWithText letter="a" />
                          がふたつあるから、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          の印をつけられるね。
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
                        その通り。
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
                        />
                        は以下の通りになるぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Oork>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              はこうなる
            </R.Oork>
            <P>
              残りは
              <H args={{ name: 'fastForward' }} /> で見ていきましょう:
            </P>
            <R.Diis />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        最終的に
                        <EmojiWithText letter="c" />と
                        <EmojiWithText letter="b" />
                        が残った！
                      </P>
                      <P>
                        <Em>
                          このふたつが残った時点で、もうこれ以上進められないから、そこで終了する
                        </Em>
                        というわけか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通りだ。では、ここで{' '}
                        <H args={{ name: 'yesNoQuiz' }} />
                        の時間だ。
                      </P>
                      <P>
                        <Em>
                          これが初級最後の <H args={{ name: 'yesNoQuiz' }} />
                          になるぞ！
                        </Em>
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Fclo />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Rgta />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <H args={{ name: 'theAnswerIs', isYes: true }} />{' '}
                          だと思う！
                        </Strong>
                        最後には
                        <EmojiWithText letter="d" />と
                        <EmojiWithText letter="b" />
                        が残るはずだ。
                      </P>
                      <P>
                        <H args={{ name: 'fastForward' }} /> で見てみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              では、
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Cuwg />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！最後に
                        <EmojiWithText letter="d" />と
                        <EmojiWithText letter="b" />
                        が残ったので、<Emoji>⭕️</Emoji> が正解だ！
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
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>これらの法則を覚えきれるか、不安だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Strong>
                          安心しろ、これらの法則を暗記する必要はない。
                        </Strong>
                        なんとなく「
                        <Em>こういう法則があるんだな</Em>
                        」と頭に入れておけば大丈夫だ。
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
        title: <>初級はここまで！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        どうだ、
                        <H args={{ name: 'yesNoQuiz' }} />
                        をすべて解いたぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        やるじゃないか。
                        <Em>
                          というわけで、初級編はここで終わりだ。次からは中級編に入る。
                        </Em>
                      </P>
                      <P>
                        さきほど約束した通り、
                        <Em>
                          <Strong>
                            次からはじまる中級編で、とても難しい問題を出題する。
                          </Strong>
                          このページで紹介した法則を応用すれば解ける問題だ。それに答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <WillReturn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        その難しい問題とやらを解けば、本当に計算箱を返してもらえるのか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ああ、悪魔に二言はないからな。</P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、やってやるぞ！中級編に進もう！</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
