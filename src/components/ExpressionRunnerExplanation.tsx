import React from 'react'
import { InlineHeader } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TopLeftBadge from 'src/components/TopLeftBadge'
import locale from 'src/lib/locale'
import {
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import H from 'src/components/H'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
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
  activePriority,
  showAllShowSteps,
  hideFuncUnboundBadge
}: {
  state: ExpressionContainer['previouslyChangedExpressionState']
  matchExists?: boolean
  activePriority?: number
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
}) => {
  switch (state) {
    case 'default': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return <>次に進みます！</>
      }
    }
    case 'active': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return (
          <>
            <InlinePrioritiesLabel revert>
              {activePriority}
            </InlinePrioritiesLabel>
            のペアに注目します
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
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
            に同じ料理があります <Emoji>⚠️</Emoji>
          </>
        )
      }
    }
    case 'alphaConvertDone': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            を別の料理に
          </>
        )
      }
    }
    case 'conditionActive': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <InlineEmojiBoxesForCondition type="condition" /> が{' '}
            <Emoji size="mdlg">0️⃣</Emoji> かどうかチェック
          </>
        )
      }
    }
    case 'trueCaseOnly':
    case 'trueCaseActive': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <Emoji size="mdlg">0️⃣</Emoji>なので{' '}
            <InlineEmojiBoxesForCondition type="trueCase" /> が残ります
          </>
        )
      }
    }
    case 'falseCaseOnly':
    case 'falseCaseActive': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            1以上 <Emoji size="mdlg">🔢</Emoji> なので{' '}
            <InlineEmojiBoxesForCondition type="falseCase" /> が残ります
          </>
        )
      }
    }
    case 'magicalExpanded': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <H args={{ name: 'witch' }} />
            の部分が変化します
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
            activePriority: expressionContainer.activePriority,
            showAllShowSteps,
            hideFuncUnboundBadge
          })
        )}
      </>
    }
  </>
)

export default ExpressionRunnerExplanation
