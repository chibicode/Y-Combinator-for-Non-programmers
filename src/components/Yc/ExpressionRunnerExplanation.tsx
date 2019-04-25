/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InlineHeader } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopLeftBadge from 'src/components/Yc/TopLeftBadge'
import locale from 'src/lib/locale'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import H from 'src/components/H'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
  isPlaying: boolean
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
}

const allAtOnce = (hideFuncUnboundBadge?: boolean) =>
  locale === 'en' ? (
    <>
      Showing <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
      <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
      {!hideFuncUnboundBadge && (
        <>
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        </>
      )}
      <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
    </>
  ) : (
    <>
      <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
      <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
      {!hideFuncUnboundBadge && (
        <>
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        </>
      )}
      <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
      の印をつけます
    </>
  )

const stateToExplanation = ({
  state,
  matchExists,
  showAllShowSteps,
  hideFuncUnboundBadge
}: {
  state: CallStates
  matchExists?: boolean
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
}) => {
  switch (state) {
    case 'default': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return (
          <>
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> に
          </>
        )
      }
    }
    case 'active': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return (
          <>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
            の部分に注目します
          </>
        )
      }
    }
    case 'showFuncBound': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
              Rightmost on bottom row
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              下段の一番右は{' '}
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      }
    }
    case 'showFuncUnbound': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
              Middle items on bottom row
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              下段の真ん中は{' '}
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      }
    }
    case 'showFuncArg': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> Leftmost
            on bottom row
          </>
        )
      } else {
        return (
          <>
            下段の一番左は{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      }
    }
    case 'showCallArg': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> Top row
          </>
        )
      } else {
        return (
          <>
            上段は <BottomRightBadge bottomRightBadgeType="callArg" inline />
          </>
        )
      }
    }
    case 'betaReducePreviewBefore': {
      if (locale === 'en') {
        return matchExists ? (
          <>
            There’s a match <TopLeftBadge topLeftBadgeType="match" inline />{' '}
            between <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
            and <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        ) : (
          <>
            There’s no match <TopLeftBadge topLeftBadgeType="unmatch" inline />{' '}
            between <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
            and <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      } else {
        return matchExists ? (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> に一致{' '}
            <TopLeftBadge topLeftBadgeType="match" inline /> する料理があります
          </>
        ) : (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            が一致しませんでした{' '}
            <TopLeftBadge topLeftBadgeType="unmatch" inline />
          </>
        )
      }
    }
    case 'betaReducePreviewAfter': {
      if (locale === 'en') {
        return (
          <>
            Matched <TopLeftBadge topLeftBadgeType="match" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> becomes
            the same as{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
            を一致した
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            の部分に
            <H args={{ name: 'copy' }} highlightType="none" />
          </>
        )
      }
    }
    case 'betaReducePreviewCrossed': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>💥</Emoji> Remove{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> and{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
            が消えます <Emoji>💥</Emoji>
          </>
        )
      }
    }
    case 'needsAlphaConvert': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>⚠️</Emoji> <InlineHeader>Warning</InlineHeader>: Same item in{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      } else {
        return (
          <>
            <Emoji>⚠️</Emoji> <InlineHeader>注意:</InlineHeader>{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> が同じ
          </>
        )
      }
    }
    case 'alphaConvertDone': {
      if (locale === 'en') {
        return (
          <>
            Added drinks for{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            にドリンクを追加
          </>
        )
      }
    }
    default: {
      return ''
    }
  }
}

const ExpressionRunnerExplanation = ({
  expressionContainer,
  isDone,
  isPlaying,
  showAllShowSteps,
  hideFuncUnboundBadge
}: ExpressionRunnerExplanationProps) => (
  <>
    {
      <>
        {isDone ? (
          <H args={{ name: 'done' }} highlightType="none" />
        ) : (
          !isPlaying &&
          stateToExplanation({
            state: expressionContainer.previouslyChangedExpressionState,
            matchExists: expressionContainer.matchExists,
            showAllShowSteps,
            hideFuncUnboundBadge
          })
        )}
      </>
    }
  </>
)

export default ExpressionRunnerExplanation
