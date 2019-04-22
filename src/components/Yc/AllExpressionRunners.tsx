import React from 'react'
import {
  additionCaption,
  combineNotCaption,
  combineSecretCodeCaption,
  multiplicationCaption,
  noCaption,
  notCaption,
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
import H from 'src/components/H'

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
  zzxj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E1}
      initialState="showFuncBound"
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
  keck: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewBefore"
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
  qoms: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewAfter"
    />
  ),
  mhgm: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewCrossed"
      finalIsDone
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
  zxfv: (
    <ExpressionRunnerPairSimple
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
  qwke: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e2E1}
      initialState="showFuncUnbound"
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
  uemm: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
      isDone
    />
  ),
  xhbi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
    />
  ),
  dkiy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E2}
      showPriorities
    />
  ),
  owcy: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e3E3} />,
  aaov: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E1}
      initialState="default"
      finalState="active"
      showPriorities
    />
  ),
  qxgl: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
      initialState="active"
      lastAllowedExpressionState="betaReducePreviewCrossed"
      skipToTheEnd={false}
    />
  ),
  uwma: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E1}
      initialState="betaReducePreviewCrossed"
      finalState="default"
      showPriorities
    />
  ),
  kvso: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      nextIteration
      showPriorities
      skipToTheEnd={false}
    />
  ),
  snsr: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  jrxw: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e3E1}
      initialState="showFuncUnbound"
      showPriorities
      secondInitializeInstructions={[
        {
          type: 'nextIteration'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'default'
        }
      ]}
    />
  ),
  esyi: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e3E1}
      showPriorities
      firstInitializeInstructions={[
        {
          type: 'nextIteration'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
      finalIsDone
    />
  ),
  hdxc: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E2}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  wepe: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e3E2}
      initialState="showFuncUnbound"
      showPriorities
      secondInitializeInstructions={[
        {
          type: 'nextIteration'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'default'
        }
      ]}
    />
  ),
  bwop: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e3E2}
      showPriorities
      firstInitializeInstructions={[
        {
          type: 'nextIteration'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'showFuncBound'
        }
      ]}
      finalIsDone
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
  hykj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E1}
      initialState="showFuncUnbound"
      showPriorities
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
  ebag: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E5}
      isDone
    />
  ),
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
  lygz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewBefore"
      explanationsVisibility="visible"
    />
  ),
  fivy: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewBefore"
      finalState="betaReducePreviewAfter"
    />
  ),
  dmwy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewAfter"
      skipToTheEnd={false}
    />
  ),
  fpsd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E5}
      initialState="showFuncBound"
    />
  ),
  vegw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E5}
      initialState="betaReducePreviewAfter"
    />
  ),
  pqfs: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      showPriorities
    />
  ),
  tntc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      initialState="active"
      showPriorities
    />
  ),
  mbrh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      showPriorities
      isDone
    />
  ),
  wbru: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E2}
      showPriorities
    />
  ),
  hwtu: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e5E2}
      initialState="active"
      finalState="showCallArg"
      showAllShowSteps
      showPriorities
    />
  ),
  usta: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E2}
      initialState="showCallArg"
      skipToTheEnd={false}
      showAllShowSteps
      showPriorities
    />
  ),
  mpal: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      initialState="showFuncBound"
      showPriorities
    />
  ),
  tiok: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E1}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeCaptionSimple', number: 0 }} />}
    />
  ),
  tfho: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E2}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeCaptionSimple', number: 1 }} />}
    />
  ),
  idcf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E3}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeCaptionSimple', number: 2 }} />}
    />
  ),
  xemt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E4}
      showPriorities
    />
  ),
  bpwl: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E4}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeCaptionSimple', number: 3 }} />}
    />
  ),
  eozk: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e6E5} />,
  cqpa: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E6}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'A' }} />
      }
    />
  ),
  qsfp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E4}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'g' }} />
      }
      bottomRightBadgeOverrides={{
        h: '🅱️',
        g: '🅰️'
      }}
    />
  ),
  xpvh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E1}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeCaptionSimple', number: 0 }} />}
      bottomRightBadgeOverrides={{
        b: '🅱️',
        a: '🅰️'
      }}
    />
  ),
  qmof: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  xgei: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      newCaption={<H args={{ name: 'secretCodeAddOneCaption' }} />}
    />
  ),
  mauj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        b: 'highlighted',
        a: 'highlighted'
      }}
    />
  ),
  eavp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  wafy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e6E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={2}
    />
  ),
  badn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E8}
      showPriorities
      isDone
      containerSize={'xs'}
      variableSize={'md'}
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'd' }} />
      }
    />
  ),
  slyk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E1}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'a' }} />
      }
    />
  ),
  eemn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E2}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={3}
    />
  ),
  rceu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E2}
      showPriorities
      isDone
      containerSize={'xs'}
      variableSize={'md'}
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'd' }} />
      }
    />
  ),
  sisn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E3}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'a' }} />
      }
    />
  ),
  syhh: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E4}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={3}
    />
  ),
  ablz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E4}
      showPriorities
      isDone
      containerSize={'xs'}
      variableSize={'md'}
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'd' }} />
      }
    />
  ),
  bpza: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E5}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'e' }} />
      }
    />
  ),
  vrvl: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E6}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'g' }} />
      }
    />
  ),
  goif: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  bxdf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E7}
      showPriorities
      newCaption={<H args={{ name: 'secretCodeAddCaption' }} />}
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  hdwy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        e: 'highlighted',
        f: 'highlighted',
        g: 'highlighted',
        h: 'highlighted'
      }}
    />
  ),
  rome: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
    />
  ),
  dhdk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      isDone
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'c' }} />
      }
    />
  ),
  unck: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
      highlightOverrides={{
        e: 'highlighted',
        f: 'highlighted',
        g: 'highlighted',
        h: 'highlighted'
      }}
    />
  ),
  cpbj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      isDone
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 4, letter: 'c' }} />
      }
    />
  ),
  ksya: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E1}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  bdlj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E2}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'e' }} />
      }
    />
  ),
  ifwb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E3}
      showPriorities
      newCaption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'g' }} />
      }
    />
  ),
  // What snack do I get?
  // If the number is 0, get donut (a donut looks like candy)
  // Else, get candy
  isZeroZeroTest: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.isZeroZero}
      showPriorities
      speed={2}
      skipToTheEnd={false}
    />
  ),
  isZeroOneTest: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.isZeroOne}
      showPriorities
      speed={2}
      skipToTheEnd={false}
    />
  ),
  // alphaConvert is not necessary because it does
  // (x => a => b => c)(a => b => c) and x is not used
  isZeroTwoTest: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.isZeroTwo}
      showPriorities
      skipAlphaConvert
      speed={2}
      skipToTheEnd={false}
    />
  ),
  // alphaConvert is not necessary because it does
  // (x => a => b => c)(a => b => c) and x is not used
  isZeroThreeTest: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.isZeroThree}
      showPriorities
      skipAlphaConvert
      speed={2}
      skipToTheEnd={false}
    />
  ),
  isZeroQuestion: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.isZeroQuestion}
      showPriorities
      speed={2}
      skipToTheEnd={false}
    />
  )
}

export const episode10 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode9Expression7}
      containerSize={'xs'}
      variableSize={'sm'}
      speed={2}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression1}
      containerSize={'xs'}
      variableSize={'sm'}
      speed={2}
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
      speed={2}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode10Expression4}
      containerSize={'xs'}
      variableSize={'sm'}
      speed={2}
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
