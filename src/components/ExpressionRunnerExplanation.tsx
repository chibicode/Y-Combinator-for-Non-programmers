import React from 'react'
import { Bold } from 'src/components/ContentTags'
import EmojiNumber from 'src/components/EmojiNumber'
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
import InlineBorder from 'src/components/InlineBorder'
import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  isPlaying: boolean
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
  convert: ExpressionRunnerPrecomputedProps['convert']
}

const allAtOnce = (hideFuncUnboundBadge?: boolean) =>
  locale === 'en' ? (
    <>
      Label items as <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
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

const Explanation = ({
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
        return <>Next!</>
      } else {
        return <>次に進みます！</>
      }
    }
    case 'active': {
      if (locale === 'en') {
        return (
          <>
            Focus on the pair of{' '}
            <InlinePrioritiesLabel revert>
              {activePriority}
            </InlinePrioritiesLabel>
            ’s
          </>
        )
      } else {
        return (
          <>
            <InlinePrioritiesLabel revert>
              {activePriority}
            </InlinePrioritiesLabel>{' '}
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
            among <BottomRightBadge bottomRightBadgeType="funcArg" inline />
            ’s and <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            ’s
          </>
        ) : (
          <>
            There’s no match <TopLeftBadge topLeftBadgeType="unmatch" inline />{' '}
            among <BottomRightBadge bottomRightBadgeType="funcArg" inline />
            ’s and <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            ’s
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
            Copy <BottomRightBadge bottomRightBadgeType="callArg" inline />
            ’s to where the matched{' '}
            <TopLeftBadge topLeftBadgeType="match" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            ’s are
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            を一致した{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
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
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
            ’s and <BottomRightBadge bottomRightBadgeType="funcArg" inline />
            ’s
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
            <Emoji>⚠️</Emoji> <Bold>Warning</Bold>: Same item in{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
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
            <Bold>特別ルール:</Bold>{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            を別の料理に <Emoji>🐶</Emoji>
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
            <InlineBorder type="condition" /> が{' '}
            <EmojiNumber number={0} size="mdlg" /> かどうかチェック
          </>
        )
      }
    }
    case 'trueCaseActive': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <InlineBorder type="condition" /> が{' '}
            <EmojiNumber number={0} size="mdlg" /> なので{' '}
            <InlineBorder type="trueCase" /> が残ります
          </>
        )
      }
    }
    case 'falseCaseActive': {
      if (locale === 'en') {
        return <>?</>
      } else {
        return (
          <>
            <InlineBorder type="condition" /> が <EmojiNumber number={0} />{' '}
            ではないので <InlineBorder type="falseCase" /> が残ります
          </>
        )
      }
    }
    default: {
      return <></>
    }
  }
}

const ExpressionRunnerExplanation = ({
  expressionContainer,
  isDone,
  isPlaying,
  showAllShowSteps,
  hideFuncUnboundBadge,
  convert
}: ExpressionRunnerExplanationProps) => (
  <>
    {
      <>
        {isDone ? (
          convert ? (
            convert === 'toMathBoxPlay' ? (
              <H args={{ name: 'doneRunAndConvertToMathbox' }} />
            ) : (
              <H args={{ name: 'doneConvertToMathbox' }} highlightType="none" />
            )
          ) : (
            <H args={{ name: 'done' }} highlightType="none" />
          )
        ) : (
          !isPlaying && (
            <Explanation
              state={expressionContainer.previouslyChangedExpressionState}
              matchExists={expressionContainer.matchExists}
              activePriority={expressionContainer.activePriority}
              showAllShowSteps={showAllShowSteps}
              hideFuncUnboundBadge={hideFuncUnboundBadge}
            />
          )
        )}
      </>
    }
  </>
)

export default ExpressionRunnerExplanation
