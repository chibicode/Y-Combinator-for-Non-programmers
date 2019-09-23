import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ol,
  OlLi,
  Bold,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import BottomRightBadge from 'src/components/BottomRightBadge'
import * as R from 'src/components/Runners'

export const ThreeRowRules = () => (
  <>
    <P>
      <Bold>Here’s how to solve a lunchbox puzzle with at least 3 rows.</Bold>
    </P>
    <Ol>
      <OlLi>
        <Highlight>
          First, start with the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          Label the center item on the bottom row as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, and
          you can ignore this for the rest of the iteration.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          After finishing the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> will become{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>. Then, repeat.
        </Highlight>
      </OlLi>
    </Ol>
    <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
  </>
)

export const Beginner5Rules = () => (
  <>
    <P>
      <Bold>Additional Rule 1:</Bold> If there are multiple pairs of{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
      <HighlightBold>start with the leftmost pair</HighlightBold>.
    </P>
    <R.Hykj>
      <H args={{ name: 'startWithLeftMostOneCaption' }} />
    </R.Hykj>
    <P>
      <Bold>Note:</Bold>{' '}
      <Highlight>
        If there’s no <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s on the
        leftmost edge of a lunchbox, then start with the inner pair of{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
      </Highlight>
    </P>
    <R.Myjz>
      If there’s no <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on the
      <br />
      leftmost edge of a lunchbox, then start with
      <br />
      the inner pair of
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
    </R.Myjz>
    <Hr />
    <P>
      <Bold>Additional Rule 2:</Bold> If you can’t start with{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s because there’s only
      one item on the bottom row,{' '}
      <HighlightBold>
        start with the pair of <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        ’s.
      </HighlightBold>
    </P>
    <R.Zemy>
      <H args={{ name: 'startWithTwoCaption' }} />
    </R.Zemy>
  </>
)

export default () => <EpisodeCardList underConstruction cards={[]} />
