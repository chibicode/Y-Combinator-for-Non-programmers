/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces } from 'src/lib/theme'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ol,
  OlLi,
  Bold,
  Italic,
  Hr
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import { BasicRules, Unmatched } from 'src/contents/4.en'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.en'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>Welcome to the intermediate levels!</>,
        preview: {
          content: (
            <>
              <P>
                <Bold>Welcome to the intermediate levels:</Bold> They’ll be
                harder than the beginner levels, but you should be able to
                handle them!
              </P>
              <Hr />
              <P>
                <Bold>Did you forget what we’ve learned so far?</Bold> If you
                took a long break after finishing the beginner levels, maybe
                you’ve forgotten what we learned.
              </P>
              <EmojiSeparator
                emojis={['❓', '😭', '❓']}
                description={<>Did you forget what we’ve learned so far?</>}
              ></EmojiSeparator>
              <P>
                <Bold>If so:</Bold> I’ve prepared a{' '}
                <Italic>review material</Italic> for you. If you’ve forgotten
                what we’ve learned so far,{' '}
                <Highlight>
                  press <Bold>Do a Quick Review</Bold>
                </Highlight>{' '}
                below.
              </P>
              <P>
                <Bold>Otherwise:</Bold> If you’ve just finished the beginner
                levels and don’t need a review,{' '}
                <Highlight>
                  then skip the review and please continue reading!{' '}
                  <Emoji>😉</Emoji>
                </Highlight>
              </P>
            </>
          ),
          text: <>Do a Quick Review</>
        },
        content: (
          <>
            <Hr />
            <P>
              <Bold>First:</Bold> People in Lambda Village were using{' '}
              <HighlightBold>mathboxes</HighlightBold>. A mathbox has{' '}
              <Highlight>
                <H args={{ name: 'plusOneFeature' }} />
              </Highlight>{' '}
              and{' '}
              <Highlight>
                <H args={{ name: 'minusOneFeature' }} />
              </Highlight>
              .
            </P>
            <TwoColGrid
              noTopNegativeMargin
              left={
                <>
                  <R.Lizi>
                    <H args={{ name: 'plusOneFeature', capitalize: true }} />
                  </R.Lizi>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
              right={
                <>
                  <R.Fdig>
                    <H args={{ name: 'minusOneFeature', capitalize: true }} />
                  </R.Fdig>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
            />
            <Hr />
            <P>
              <Bold>Also:</Bold> By using{' '}
              <Highlight>
                <H args={{ name: 'repeatFeature' }} />
              </Highlight>
              , you can do additions and subtractions.
            </P>
            <R.Ednv>
              Use <H args={{ name: 'repeatFeature' }} />
              <br />
              to calculate <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={4} />
            </R.Ednv>
            <Hr />
            <P>
              <Bold>But:</Bold> The mathboxes were stolen by the devil{' '}
              <Emoji>😈</Emoji>. To take them back, we must solve{' '}
              <Highlight>
                <H args={{ name: 'bentoBoxPuzzle', postfix: 's' }} />
              </Highlight>
              . A bentobox works as follows:
            </P>
            <BasicRules includeFuncUnbound />
            <Hr />
            <Unmatched />
            <Hr />
            <P>We also learned about the mathboxes with 3 or more rows:</P>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
            <Hr />
            <P>
              <Bold>That’s what we’ve learned in the beginner levels:</Bold>{' '}
              <Italic>You don’t need to remember them.</Italic> You just need to
              know that these rules exist, and you should be fine.
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You don’t need to remember these rules!</>}
            />
            <P>Let’s start the intermediate levels!</P>
          </>
        )
      },
      {
        title: <>Hello, Minion</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>We’ll start the intermediate levels.</P>
                      <P>
                        <Bold>As promised:</Bold> I’ll give you a{' '}
                        <Italic>very difficult question</Italic>. I’ll give you
                        the mathboxes back if you solve it!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  If you can solve this very difficult question,
                  <br />
                  I’ll give you the mathboxes back!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright, let’s do it!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        But before I give you the question, let me introduce you{' '}
                        <Italic>my partner</Italic>.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>What? Your partner?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I’ll call him now.</P>
                      <P>
                        Come here, <HighlightBold>Minion</HighlightBold>!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={
                <>
                  Hello, I’m <Bold>Minion!</Bold>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Hello, I’m Minion. How may I help you today, Mr. Devil?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Thanks for coming! Everyone, this is my partner, Minion.
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>So…a dog?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Well, Minion is not a regular dog. He’s got some{' '}
                        <Italic>special</Italic> tricks.
                      </P>
                      <P>Minion, show these guys one of your tricks!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Sure thing, sir!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Minion’s Trick</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>I’ll show you a trick of mine!</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Take a look at this lunchbox!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>It looks like a regular lunchbox…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        By using my trick,{' '}
                        <Italic>
                          I can convert this lunchbox into a mathbox
                        </Italic>
                        .
                      </P>
                      <P>
                        <Highlight>
                          Try pressing the{' '}
                          <H args={{ name: 'convertToMathbox' }} /> button
                          below!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jjjh />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Wow! It became a mathbox containing a{' '}
                        <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes, and importantly:</Bold>{' '}
                        <Italic>The conversion follows a specific rule.</Italic>
                      </P>
                      <P>
                        <Highlight>Try guessing what this rule is!</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  I convert a lunchbox into a mathbox, and
                  <br />
                  there’s a specific rule for the conversion
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
                        Hmm… I wonder what the rule is. Let’s take a look at
                        more examples!
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
        title: <>What’s the rule?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Here are 3 more examples.{' '}
                        <Highlight>
                          Try pressing <H args={{ name: 'convertToMathbox' }} />{' '}
                          on each lunchbox!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mifg />
            <R.Epoi />
            <R.Vlob />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Each one is following the <Italic>same rule</Italic>.
                        Can you figure out what this rule is?
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I might have figured out the pattern!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Alright!{' '}
                        <Highlight>
                          Let’s do a{' '}
                          <Bold>
                            <H args={{ name: 'yesNoQuiz' }} />
                          </Bold>{' '}
                          to check your understanding!
                        </Highlight>
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Take a look at this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Dubm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        If I convert this into a mathbox,{' '}
                        <Italic>will it be like the following?</Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Otbe />
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
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            sentence: true
                          }}
                        />
                        . I think it becomes <EmojiNumber number={4} /> after
                        conversion.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s try it!{' '}
                        <Highlight>
                          Press <H args={{ name: 'convertToMathbox' }} /> below.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ehxq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        It became <EmojiNumber number={4} />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            lowerCase: true
                          }}
                        />
                        !
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Alright, so let me explain the rules!</P>
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
        title: <>The Conversion Rule</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  I’ll show you exactly how to convert
                  <br />a luncbox into a mathbox!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Important:</Bold> I can only convert{' '}
                        <Italic>certain types</Italic> of lunchboxes into
                        mathboxes. A lunchbox must match the following patterns
                        to be convertible.
                      </P>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          It must have <Italic>three columns</Italic>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pirb>
              <H args={{ name: 'convertiblePatternThreeColumnsCaption' }} />
            </R.Pirb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Second:</Bold>{' '}
                        <Highlight>
                          It must match the following pattern.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mgku>
              <H args={{ name: 'convertiblePatternFirstCaption' }} />
            </R.Mgku>
            <R.Xxas>
              <H args={{ name: 'convertiblePatternSecondCaption' }} />
            </R.Xxas>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm, can you give me a concrete example?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Sure, take a look at this lunchbox I showed you earlier:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlyu />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>こちらの法則に従って印をつけてみます。</P>
                      <R.Eozk></R.Eozk>
                      <P>
                        まず、
                        <EmojiWithText letter="e" />{' '}
                        が一番左にあるので、すべての
                        <EmojiWithText letter="e" /> に <Emoji>🅰️</Emoji>{' '}
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Alca>
              <EmojiForLetter letter="e" /> が一番左にあるので、
              <br />
              すべての
              <EmojiForLetter letter="e" /> に <Emoji>🅰️</Emoji> の印をつける
            </R.Alca>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <EmojiWithText letter="f" />{' '}
                        が真ん中にあるので、すべての
                        <EmojiWithText letter="f" /> に <Emoji>🅱️</Emoji>{' '}
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mepb>
              <EmojiForLetter letter="f" /> が真ん中にあるので、
              <br />
              すべての
              <EmojiForLetter letter="f" /> に <Emoji>🅱️</Emoji> の印をつける
            </R.Mepb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>上の弁当箱は、こちらの法則と一致していますね。</P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>つまり、ぼくが計算箱に変換できるということです。</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど。</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          では、計算箱に変換した場合、何の数字になるのでしょうか？
                        </Highlight>
                      </P>
                      <P>
                        答えを言うと、
                        <HighlightBold>
                          右下にある <Emoji>🅰️</Emoji> がついた料理の数
                        </HighlightBold>
                        が、変換後の計算箱の数字になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどの弁当箱の場合、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="e" /> が「
                          <HighlightBold>2個</HighlightBold>
                          」あります。
                        </Highlight>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wopl>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 2 }}
              />
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど。</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          他の料理でも、同じ法則に沿っていれば、計算箱に変換したときに同じ数字になります。
                        </Highlight>
                      </P>
                      <P>
                        たとえば、 <EmojiWithText letter="k" /> と{' '}
                        <EmojiWithText letter="l" /> を以下のように配置した場合…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jyqf />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Emoji>🅰️</Emoji> と <Emoji>🅱️</Emoji>{' '}
                        は以下のようになるので…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mzqc>
              <EmojiForLetter letter="k" /> は一番左にあるので <Emoji>🅰️</Emoji>{' '}
              を、
              <br />
              <EmojiForLetter letter="l" /> は真ん中にあるので <Emoji>🅱️</Emoji>{' '}
              をつける
            </R.Mzqc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        計算箱に変換したときに先ほどと同じく{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qwdg>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'k', number: 2 }}
              />
            </R.Qwdg>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>
                          弁当箱に入っているのがどんな料理だろうと、
                          <Emoji>🅰️</Emoji> や <Emoji>🅱️</Emoji>{' '}
                          の印をつけた際に、同じ法則に沿っていれば同じ数字に変換される
                        </HighlightBold>
                        というわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              右下にある <Emoji>🅰️</Emoji> がついた料理の数が、
              <br />
              変換後の計算箱の数字
            </R.Hehx>
          </>
        )
      },
      {
        title: <>他の弁当箱の例</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'yesNoQuiz' }} />
                        で出した弁当箱にも、<Emoji>🅰️</Emoji> と{' '}
                        <Emoji>🅱️</Emoji> の印をつけてみましょう。まずは
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dubm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の弁当箱に、先ほどの法則にしたがって <Emoji>🅰️</Emoji>{' '}
                        と <Emoji>🅱️</Emoji> の印をつけると、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="i" />
                          が「<HighlightBold>4個</HighlightBold>」あります。
                        </Highlight>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={4} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Duuk>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'i', number: 4 }}
              />
            </R.Duuk>
            <ExpressionRunnerSeparator />
            <R.Kizi />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={0} /> になる場合
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        続いて
                        <H args={{ name: 'lookAtThisBentoBox' }} />
                        。このページの冒頭で紹介した弁当箱です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の弁当箱に、先ほどの法則にしたがって <Emoji>🅰️</Emoji>{' '}
                        と <Emoji>🅱️</Emoji> の印をつけると、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="a" /> が
                          <Highlight>ひとつもありません</Highlight>。
                        </Highlight>
                      </P>
                      <P>
                        つまり、
                        <HighlightBold>
                          <Emoji>🅰️</Emoji> の数は「ゼロ個」
                        </HighlightBold>
                        というわけです。
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={0} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
            </R.Dwzy>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <Highlight>
                          右下の <Emoji>🅰️</Emoji>{' '}
                          の数がゼロになる場合もあるんだね。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。先ほど紹介した法則の「<Emoji>🅰️</Emoji> が
                        <HighlightBold>いくつか</HighlightBold>」というのは、「
                        <Emoji>🅰️</Emoji> が
                        <HighlightBold>ゼロ個</HighlightBold>
                        」である場合も含まれているわけです。
                      </P>
                      <R.Hehx>
                        右下にある <Emoji>🅰️</Emoji> の数が
                        <br />
                        ゼロになる場合もある
                      </R.Hehx>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>実行してから変換</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        さらにぼくは、
                        <HighlightBold>
                          弁当箱を
                          <H args={{ name: 'play' }} /> してから計算箱に変換する
                        </HighlightBold>
                        こともできます。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'play' }} />{' '}
                        してから計算箱に変換？どういうこと？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <Emoji>▶️</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  <H args={{ name: 'play' }} /> してから
                  <br />
                  計算箱に変換する
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ためしに、
                        <Highlight>
                          次の弁当箱の下にある、「
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                          」ボタンを押してみてください。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dcji />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={0} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、理由を説明しますね。まず、もともとの弁当箱を実行するとどうなるか、
                        <H args={{ name: 'fastForward' }} /> で見てみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zlrx />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、もともとの弁当箱を
                        <H args={{ name: 'play' }} />{' '}
                        すると、次のような弁当箱になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm>
              <H args={{ name: 'play' }} /> した結果はこうなる
            </R.Jarm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          これは先ほど説明した通り、計算箱に変換すると{' '}
                          <EmojiNumber number={0} /> になります。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
            </R.Dwzy>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>このような、</P>
                      <Ol>
                        <OlLi>
                          <Highlight>
                            まず弁当箱を
                            <H args={{ name: 'play' }} />
                            し、
                          </Highlight>
                        </OlLi>
                        <OlLi>
                          <Highlight>
                            実行し終えたら、続いて{' '}
                            <H args={{ name: 'convertToMathbox' }} /> する
                          </Highlight>
                        </OlLi>
                      </Ol>
                      <P>というふたつのステップを、</P>
                      <P>
                        <ExpressionRunnerButton
                          css={css`
                            padding-left: ${spaces(1)};
                            padding-right: ${spaces(1)};
                            background: ${colors('yellow100')};
                          `}
                        >
                          <H
                            args={{
                              name: 'runAndConvertToMathbox',
                              addNewline: true
                            }}
                          />
                        </ExpressionRunnerButton>
                      </P>
                      <P>…を押すことで、一度に行うことができるのです。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Qsnv />
            <ExpressionRunnerSeparator />
            <R.Jwah>
              <HighlightBold>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </HighlightBold>
            </R.Jwah>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、「<Bold>実行</Bold>」と「
                        <Bold>計算箱に変換</Bold>」を
                        <HighlightBold>一括で行う</HighlightBold>
                        こともできる、ということだな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🍱', '▶️']}
              noBottomMargin
              description={
                <>
                  まず弁当箱を
                  <H args={{ name: 'play' }} /> し…
                </>
              }
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              noTopMargin
              description={<>計算箱に変換するのを一括で行える</>}
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、ここで最後に <H args={{ name: 'yesNoQuiz' }} />
                        をやってみましょう。
                      </P>
                      <P>こちらの弁当箱を…</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rlrs />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        「
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        」すると、下のようになるでしょうか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pmdm />
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
                        <HighlightBold>
                          <H args={{ name: 'theAnswerIs', isYes: false }} />{' '}
                          だと思う！
                        </HighlightBold>
                        変換すると <EmojiNumber number={2} /> ではなく、
                        <EmojiNumber number={1} /> になるはずだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        を押してみてくだださい！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zahd />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！ <EmojiNumber number={1} /> になったので、
                        <Emoji>❌</Emoji> が正解だ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>その通りです！</P>
                      <P>
                        確認のために、もともとの弁当箱を
                        <H args={{ name: 'fastForward' }} />
                        してみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Csqj />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、もともとの弁当箱を
                        <H args={{ name: 'play' }} />
                        すると、次のような弁当箱になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Igpn>
              <H args={{ name: 'play' }} /> した結果はこうなる
            </R.Igpn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          これは、計算箱に変換すると <EmojiNumber number={1} />{' '}
                          になります。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hhdu>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 1 }}
              />
            </R.Hhdu>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        というわけで、もともとの弁当箱を
                        <H
                          args={{ name: 'runAndConvertToMathbox' }}
                        /> すると <EmojiNumber number={2} /> ではなく{' '}
                        <EmojiNumber number={1} /> になるので、クイズの正解は{' '}
                        <Emoji>❌</Emoji> でした！
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
        title: <>次のページで、難しい問題を出します</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ミニオン、説明ご苦労だった！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>お安い御用です、ご主人さま！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        それでは以前約束した通り、
                        <Highlight>
                          <HighlightBold>
                            次のページで難しい問題を出題する
                          </HighlightBold>
                          。それに答えることができたら、計算箱を返してやろう！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  次のページで出す難しい問題に
                  <br />
                  答えられたら計算箱を返してやろう！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        やっと計算箱を賭けた問題にチャレンジできるということだな。よーし、次のページに進むぞ！
                      </P>
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
