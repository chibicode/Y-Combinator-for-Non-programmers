import React from 'react'
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
      hideFuncUnboundBadgeOnExplanation
      expressionContainer={lessonExpressions.e1E1}
      initialState="active"
      finalState="showFuncBound"
    />
  ),
  rqjo: (
    <ExpressionRunnerSingleStep
      hideFuncUnboundBadgeOnExplanation
      expressionContainer={lessonExpressions.e1E1}
      initialState="showFuncBound"
      finalState="betaReducePreviewBefore"
    />
  ),
  evqx: (
    <ExpressionRunnerSingleStep
      hideFuncUnboundBadgeOnExplanation
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewAfter"
    />
  ),
  msiw: (
    <ExpressionRunnerSingleStep
      hideFuncUnboundBadgeOnExplanation
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
      hideFuncUnboundBadgeOnExplanation
      expressionContainer={lessonExpressions.e1E2}
      initialState="showFuncBound"
      finalState="betaReducePreviewBefore"
    />
  ),
  gwtp: (
    <ExpressionRunnerSingleStep
      hideFuncUnboundBadgeOnExplanation
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
  ),
  rmsd: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e2E1}
      initialState="active"
      finalState="showFuncUnbound"
    />
  ),
  jmqh: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e2E1}
      initialState="showFuncUnbound"
      skipToTheEnd={false}
    />
  ),
  iped: (
    <ExpressionRunnerPairSimple expressionContainer={lessonExpressions.e2E1} />
  ),
  cvtc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
    />
  ),
  xhbi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
    />
  ),
  tbij: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E2}
      showPriorities
    />
  ),
  dkiy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E3}
      showPriorities
    />
  ),
  owcy: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e3E4} />,
  bagn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E3}
      showPriorities
    />
  ),
  aaov: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E3}
      initialState="default"
      finalState="active"
      showPriorities
    />
  ),
  qxgl: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E3}
      showPriorities
      initialState="active"
      lastAllowedExpressionState="betaReducePreviewCrossed"
      skipToTheEnd={false}
    />
  ),
  uwma: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E3}
      initialState="betaReducePreviewCrossed"
      finalState="default"
      showPriorities
    />
  ),
  kvso: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E3}
      nextIteration
      showPriorities
      skipToTheEnd={false}
    />
  ),
  snsr: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E3}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  gmck: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  hdxc: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E2}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  laea: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E1}
      showPriorities
    />
  ),
  cgpd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E1}
      isDone
    />
  ),
  ijot: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E1}
      showPriorities
    />
  ),
  aezk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E1}
      initialState="active"
      showPriorities
    />
  ),
  ainx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E1}
      initialState="active"
      lastAllowedExpressionState="showFuncBound"
      showPriorities
      showAllShowSteps
      skipToTheEnd={false}
    />
  ),
  ielw: (
    <ExpressionRunnerSimple
      showAllShowSteps
      expressionContainer={lessonExpressions.e5E1}
      initialState="showFuncUnbound"
      showPriorities
    />
  ),
  dtzu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E1}
      initialState="betaReducePreviewBefore"
      showPriorities
      explanationsVisibility="visible"
    />
  ),
  efyy: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e5E1}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewAfter"
      showPriorities
    />
  ),
  izgz: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E1}
      initialState="betaReducePreviewAfter"
      showPriorities
      skipToTheEnd={false}
    />
  ),
  ljjg: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e3E5} />,
  vglb: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e3E6} />,
  skzv: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E5}
    />
  ),
  egmr: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E5}
      initialState="active"
      finalState="showFuncBound"
      hideFuncUnboundBadgeOnExplanation
    />
  ),
  fivy: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewAfter"
      explanationsVisibility="visible"
    />
  ),
  dmwy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewAfter"
      skipToTheEnd={false}
    />
  )
}

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
