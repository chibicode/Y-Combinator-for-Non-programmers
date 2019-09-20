import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, InlineHeader } from 'src/components/ContentTags'
import BottomRightBadge from 'src/components/BottomRightBadge'
import Emoji from 'src/components/Emoji'
import * as R from 'src/components/Runners'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'

export const BasicRules = ({
  includeFuncUnbound
}: {
  includeFuncUnbound?: boolean
}) => (
  <>
    <P>
      1. <InlineHeader>Add labels:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </P>
    <R.Zzxj>
      <InlineHeader>Add labels:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </R.Zzxj>
    <P>
      2. <InlineHeader>Find matches:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </P>
    <R.Keck>
      <InlineHeader>Find matches:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </R.Keck>
    <P>
      3. <InlineHeader>Copy:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </P>
    <R.Qoms>
      <InlineHeader>Copy:</InlineHeader>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </R.Qoms>
    <P>
      4. <InlineHeader>Remove:</InlineHeader> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </P>
    <R.Mhgm>
      <InlineHeader>Remove:</InlineHeader> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </R.Mhgm>
    <ExpressionRunnerSeparator />
    <R.Osqo />
  </>
)

export const Unmatched = () => (
  <>
    <P>
      If none of <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s match,{' '}
      <Strong>
        don’t do the copy step and simply remove{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
        ’s
      </Strong>
      .
    </P>
    <R.Jwzh>
      If none of <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s match…
    </R.Jwzh>
    <ExpressionRunnerSeparator />
    <R.Knhw>
      Simply remove <BottomRightBadge inline bottomRightBadgeType="callArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s
    </R.Knhw>
  </>
)

export default () => <EpisodeCardList underConstruction cards={[]} />
