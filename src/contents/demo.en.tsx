import React from 'react'
import {
  P,
  Hr,
  Bold,
  HighlightBold,
  CenteredCode
} from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import { BasicRules, Unmatched } from 'src/contents/4.en'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.en'

const DemoCardList = () => (
  <EpisodeCardList
    demo
    cards={[
      {
        type: 'summary',
        title: <>This is a demo page</>,
        content: (
          <>
            <P>
              I use this page when demonstrating materials from this course to
              someone <HighlightBold>in person</HighlightBold>. So there won’t
              be any explanations written on this page.
            </P>
          </>
        )
      },
      {
        type: 'sideNote',

        title: <>Part 1: Mathbox Basics</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>Mathboxes</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneFeature' }} />
          </>
        ),
        content: (
          <>
            <R.Mcug />
            <R.Aovj />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>Part 2: Lunchbox Basics</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[<Emoji>🍱</Emoji>, <Emoji>🍱</Emoji>, <Emoji>🍱</Emoji>]}
              description={<>Lunchboxes</>}
            />
          </>
        )
      },
      {
        title: <>Lunchboxes with 2 Rows</>,
        content: (
          <>
            <R.Wunw />
            <R.Hluq />
            <R.Jbam />
            <R.Zuus />
          </>
        )
      },
      {
        title: <>Lunchbox Rules</>,
        type: 'summary',
        content: (
          <>
            <BasicRules includeFuncUnbound />
            <Hr />
            <Unmatched />
          </>
        )
      },
      {
        title: <>Lunchbox with 3 Rows</>,
        content: (
          <>
            <R.Beiz />
            <R.Hdxc />
            <R.Thkn />
            <R.Cuwg />
          </>
        )
      },
      {
        type: 'summary',
        title: <>Rules for Lunchboxes with 3+ Rows</>,
        content: (
          <>
            <P>
              <Bold>
                Here’s how to solve a lunchbox puzzle with at least 3 rows.
              </Bold>
            </P>
            <ThreeRowRules />
            <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
            <Hr />
            <Beginner5Rules />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>Part 3: Converting Lunchboxes to Mathboxes</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
            />
          </>
        )
      },
      {
        title: <>Converting Lunchboxes to Mathboxes</>,
        content: (
          <>
            <R.Jjjh />
            <R.Mifg />
            <R.Epoi />
            <R.Vlob />
          </>
        )
      },
      {
        title: <>Rules for Converting to Mathboxes</>,
        type: 'summary',
        content: (
          <>
            <R.Eozk>
              <H args={{ name: 'convertiblePatternCaption' }} />
            </R.Eozk>
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
            <Hr />
            <R.Wopl>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 2 }}
              />
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <Hr />
            <R.Duuk>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'i', number: 4 }}
              />
            </R.Duuk>
            <ExpressionRunnerSeparator />
            <R.Kizi />
            <Hr />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
            </R.Dwzy>
            <ExpressionRunnerSeparator />
            <R.Jwah />
          </>
        )
      },
      {
        title: <>Part 4: Adding 1</>,
        type: 'sideNote',
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            Calculating <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} />
          </>
        ),
        content: (
          <>
            <R.Rbup>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Rbup>
            <Hr />
            <R.Rjzw></R.Rjzw>
            <Hr />
            <R.Rico>
              <H
                args={{ name: 'canBeConvertedCaption', number: 2, letter: 'b' }}
              />
            </R.Rico>
          </>
        )
      },
      {
        title: (
          <>
            Calculating <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} />
          </>
        ),
        content: (
          <>
            <R.Spga>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'f',
                  number: 2
                }}
              />
            </R.Spga>
            <Hr />
            <R.Nlbn />
            <Hr />
            <R.Nngz>
              <H
                args={{ name: 'canBeConvertedCaption', number: 3, letter: 'b' }}
              />
            </R.Nngz>
          </>
        )
      },
      {
        title: <>Mathboxes can be replicated by Lunchboxes</>,
        content: (
          <>
            <R.Lizi></R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde></R.Plde>
            <Hr />
            <R.Gnwm></R.Gnwm>
            <ExpressionRunnerSeparator />
            <R.Awwn></R.Awwn>
          </>
        )
      },
      {
        title: <>Part 5: Lunchboxes are syntax sugar for Lambda Calculus</>,
        type: 'sideNote',
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <CustomEmoji type="lambda" />
              ]}
            />
          </>
        )
      },
      {
        title: <>Lambda Calculus and Lunchboxes</>,
        content: (
          <>
            <CenteredCode size="md">λA.B C</CenteredCode>
            <ExpressionRunnerSeparator />
            <R.Kzkg></R.Kzkg>
          </>
        )
      },
      {
        title: <>Y Combinator using Lunchboxes</>,
        content: (
          <>
            <CenteredCode size="sm">λA.(λB.A(B B))(λB.A(B B))</CenteredCode>
            <ExpressionRunnerSeparator />
            <R.Rjho></R.Rjho>
          </>
        )
      },
      {
        title: <>Python’s lambda and Lunchboxes</>,
        content: (
          <>
            <CenteredCode size="sm">(lambda A: A)('B')</CenteredCode>
            <ExpressionRunnerSeparator />
            <CenteredCode size="sm">'B'</CenteredCode>
            <Hr />
            <R.Aklf></R.Aklf>
            <ExpressionRunnerSeparator />
            <R.Gemh></R.Gemh>
          </>
        )
      }
    ]}
  />
)

export default DemoCardList
