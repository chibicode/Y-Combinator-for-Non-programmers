import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong,
  Ol,
  OlLi,
  InlineHeader,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import BottomRightBadge from 'src/components/BottomRightBadge'
import * as R from 'src/components/Runners'

export const ThreeRowRules = () => (
  <>
    <P>
      <InlineHeader>
        Here’s how to solve a lunchbox puzzle with at least 3 rows.
      </InlineHeader>
    </P>
    <Ol>
      <OlLi>
        <Em>
          First, start with the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          Label the center item on the bottom row as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, and
          you can ignore this for the rest of the iteration.
        </Em>
      </OlLi>
      <OlLi>
        <Em>
          After finishing the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> will become{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>. Then, repeat.
        </Em>
      </OlLi>
    </Ol>
    <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
  </>
)

export const Beginner5Rules = () => (
  <>
    <P>
      <InlineHeader>Additional Rule 1:</InlineHeader> If there are multiple
      pairs of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
      <Strong>start with the leftmost pair</Strong>.
    </P>
    <R.Hykj>
      <H args={{ name: 'startWithLeftMostOneCaption' }} />
    </R.Hykj>
    <P>
      <InlineHeader>Note:</InlineHeader>{' '}
      <Em>
        If there’s no <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s on the
        leftmost edge of a lunchbox, then start with the inner pair of{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
      </Em>
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
      <InlineHeader>Additional Rule 2:</InlineHeader> If you can’t start with{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s because there’s only
      one item on the bottom row,{' '}
      <Strong>
        start with the pair of <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        ’s.
      </Strong>
    </P>
    <R.Zemy>
      <H args={{ name: 'startWithTwoCaption' }} />
    </R.Zemy>
  </>
)

export default () => <EpisodeCardList underConstruction cards={[]} />
