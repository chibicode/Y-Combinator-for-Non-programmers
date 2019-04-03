import React from 'react'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import {
  additionCaption,
  combineNotCaption,
  combineSecretCodeCaption,
  multiplicationCaption,
  noCaption,
  notCaption,
  plusOneCaption,
  secretCodeCaption,
  yesCaption
} from 'src/components/Yc/effectCaptions'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import {
  ExpressionRunnerSimple,
  ExpressionRunnerPlayButtonOnly,
  ExpressionRunnerPairSimple,
  ExpressionRunnerSingleStep
} from 'src/components/Yc/ExpressionRunnerShorthand'
import TopBadge from 'src/components/Yc/TopBadge'
import * as lessonExpressions from 'src/lib/yc/lessonExpressions'

// Keys generated using a Ruby script running on an Alfred workflow:
// print 4.times.map { (97 + rand(26)).chr }.join
export default {
  ilpo: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E1} />,
  imyd: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E2} />,
  emmb: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E3} />,
  jozw: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E4} />,
  itbm: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E1}
    />
  ),
  uqwm: (
    <ExpressionRunnerPairSimple expressionContainer={lessonExpressions.e1E1} />
  ),
  zwpj: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E2}
    />
  ),
  dqkc: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E3}
    />
  ),
  ldox: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E4}
    />
  ),
  bgfl: (
    <ExpressionRunnerPairSimple expressionContainer={lessonExpressions.e1E2} />
  ),
  tuqr: (
    <ExpressionRunnerPairSimple expressionContainer={lessonExpressions.e1E3} />
  ),
  cpkp: (
    <ExpressionRunnerPairSimple expressionContainer={lessonExpressions.e1E4} />
  ),
  loai: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E5} />,
  vvjn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E5}
      isDone
    />
  ),
  hbgo: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E6} />,
  olef: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e1E7} />,
  zzyu: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E5}
    />
  ),
  qpjt: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E6}
    />
  ),
  ozbe: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E1}
      initialState="active"
      finalState="showFuncBound"
    />
  ),
  rqjo: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E1}
      initialState="showFuncBound"
      finalState="betaReducePreviewBefore"
    />
  ),
  evqx: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewAfter"
    />
  ),
  msiw: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewAfter"
      finalState="betaReducePreviewCrossed"
    />
  ),
  osqo: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E1}
      isDone
    />
  ),
  sgfj: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E2}
      initialState="showFuncBound"
      finalState="betaReducePreviewBefore"
    />
  ),
  gwtp: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e1E2}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewCrossed"
    />
  ),
  ahsd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E2}
      isDone
    />
  ),
  wunw: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E1}
      initialState="active"
      skipToTheEnd={false}
    />
  ),
  jbam: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e1E2}
      initialState="active"
      skipToTheEnd={false}
    />
  ),
  xwim: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e2E1} />,
  awxz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e2E1}
      isDone
    />
  ),
  ldts: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e2E1}
    />
  )
}

// NOTE: Use functions instead of just JSX.Element inside because
// linter will complain that it's missing the key attribute
export const episode1 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      highlightOverrides={{
        funcArg: 'forceYellowHighlight',
        funcBound: 'forceYellowHighlight'
      }}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      highlightOverrides={{
        funcArg: 'active',
        funcBound: 'forceYellowHighlight',
        callArg: 'forceYellowHighlight'
      }}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      caption={{
        en: (
          <>
            <Emoji size="mdlg">🍣</Emoji> (
            <TopBadge inline topBadgeType="match" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />) became{' '}
            <Emoji size="mdlg">🥪</Emoji> (same as{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />)
          </>
        ),
        jp: (
          <>
            <Emoji size="mdlg">🍣</Emoji> (
            <TopBadge inline topBadgeType="match" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />) が{' '}
            <Emoji size="mdlg">🥪</Emoji> になった(
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と同じ)
          </>
        )
      }}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'nextIteration'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'nextIteration'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression1}
      hidePriorities
      hidePlayButton
      showAllShowSteps
      variableSize={'lg'}
      resetIndex
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression2}
      hidePriorities
      hidePlayButton
      showAllShowSteps
      variableSize={'lg'}
      resetIndex
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  )
]

export const episode1Quiz = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      resetIndex
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      resetIndex
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilTheEnd'
        }
      ]}
    />
  )
]

export const episode2 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      variableSize={'lg'}
      resetIndex
      hidePlayButton
      hidePriorities
      showAllShowSteps
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      resetIndex
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilTheEnd'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode1Expression3}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
      hideBottomRightBadges
      highlightOverrides={{
        funcUnbound: 'forceYellowHighlight'
      }}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncUnbound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      showAllShowSteps
      resetIndex
      hidePlayButton
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
      lastAllowedExpressionState="showFuncUnbound"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      showAllShowSteps
      hidePlayButton
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncUnbound'
        }
      ]}
      lastAllowedExpressionState="betaReducePreviewBefore"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      showAllShowSteps
      hidePlayButton
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  )
]

export const episode2Quiz = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      showAllShowSteps
      hidePlayButton
      containerSize="xs"
      hideControls
      variableSize={'lg'}
      explanationsVisibility="hidden"
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression3}
      hidePriorities
      showAllShowSteps
      hidePlayButton
      hideControls
      variableSize={'lg'}
      explanationsVisibility="hidden"
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  )
]

export const episode4 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePlayButton
      hidePriorities
      resetIndex
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'nextIteration'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      showAllShowSteps
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      showAllShowSteps
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      showAllShowSteps
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncUnbound'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      showAllShowSteps
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePlayButton
      hidePriorities
      resetIndex
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePriorities
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  )
]

export const episode5 = [
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePlayButton
      hidePriorities
      showAllShowSteps
      resetIndex
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      variableSize={'lg'}
      maxStepsAllowed={1}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      variableSize={'lg'}
      lastAllowedExpressionState="betaReducePreviewCrossed"
      showAllShowSteps
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      variableSize={'lg'}
      maxStepsAllowed={1}
      showAllShowSteps
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      variableSize={'lg'}
      showAllShowSteps
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'default'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hidePlayButton
      showAllShowSteps
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression2}
      hideControls
      showAllShowSteps
      explanationsVisibility="hidden"
      variableSize={'lg'}
    />
  )
]

export const episode6 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression2}
      hidePlayButton
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression1}
      hideControls
      explanationsVisibility="hidden"
      containerSize={'xs'}
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression1}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'lg'}
      maxStepsAllowed={1}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression1}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'active'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression4}
      containerSize={'xs'}
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression5}
      containerSize={'xs'}
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression4}
      containerSize={'xs'}
      variableSize={'lg'}
      hidePlayButton
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression2}
      containerSize={'xs'}
      hideControls
      explanationsVisibility="hidden"
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode6Expression3}
      containerSize={'xs'}
      variableSize={'lg'}
    />
  )
]

export const episode7 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression2}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode6Expression3}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression2}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'md'}
      maxStepsAllowed={1}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode7Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showCallArg'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      expressionContainer={lessonExpressions.episode7Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'needsAlphaConvert'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode7Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      hidePlayButton
      lastAllowedExpressionState="alphaConvertDone"
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'needsAlphaConvert'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode7Expression1}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'md'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'alphaConvertDone'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode7Expression2}
      hidePlayButton
      containerSize={'xs'}
      variableSize={'md'}
    />
  )
]

export const episode8 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression2}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression3}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression4}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression5}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression5}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍚', 5)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression6}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍟', 2)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression7}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression8}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  )
]

export const episode9 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression8}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🥪', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression6}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍟', 2)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression7}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={plusOneCaption}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression2}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍛', 4)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression3}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression4}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🥪', 5)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression7}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={plusOneCaption}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression5}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression6}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍟', 2)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression6}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍚', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression7}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
    />
  )
]

export const episode10 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression7}
      containerSize={'xs'}
      variableSize={'sm'}
      isFastForwardPlayButton
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression1}
      containerSize={'xs'}
      variableSize={'sm'}
      isFastForwardPlayButton
      caption={secretCodeCaption('🍔', 5)}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression6}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍟', 2)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression6}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍚', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression5}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={additionCaption}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression7}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={combineSecretCodeCaption('add', '🍟', 2, '🍚', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression2}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={multiplicationCaption}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode8Expression6}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍟', 2)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression6}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={secretCodeCaption('🍚', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression3}
      containerSize={'xs'}
      variableSize={'sm'}
      isFastForwardPlayButton
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression4}
      containerSize={'xs'}
      variableSize={'sm'}
      isFastForwardPlayButton
      caption={secretCodeCaption('🍔', 6)}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression3}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={combineSecretCodeCaption('multiply', '🍟', 2, '🍚', 3)}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression5}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={additionCaption}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression2}
      containerSize={'xs'}
      variableSize={'sm'}
      hideControls
      explanationsVisibility="hidden"
      caption={multiplicationCaption}
    />
  )
]

export const episode11 = [
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression1}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression2}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression3}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression4}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      caption={yesCaption}
      expressionContainer={lessonExpressions.episode11Expression5}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression7}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression8}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode11Expression8}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      caption={noCaption}
      expressionContainer={lessonExpressions.episode11Expression9}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      caption={noCaption}
      expressionContainer={lessonExpressions.episode11Expression6}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression7}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression10}
      containerSize={'xs'}
      variableSize={'md'}
    />
  )
]

export const episode12 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode11Expression10}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      caption={yesCaption}
      expressionContainer={lessonExpressions.episode12Expression1}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      hideControls
      explanationsVisibility="hidden"
      expressionContainer={lessonExpressions.episode11Expression10}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode11Expression7}
      containerSize={'xs'}
      variableSize={'md'}
      caption={notCaption}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode11Expression8}
      containerSize={'xs'}
      variableSize={'md'}
      caption={combineNotCaption('yes')}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode11Expression10}
      containerSize={'xs'}
      variableSize={'md'}
      caption={combineNotCaption('no')}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression2}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression2}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression3}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression4}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression5}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.oldEpisode9Expression1}
      containerSize={'xs'}
      variableSize={'md'}
      hideControls
      explanationsVisibility="hidden"
    />
  )
]
