import React from 'react'
import { Strong } from 'src/components/ContentTags'
import {
  ExpressionRunnerSimple,
  ExpressionRunnerPlayButtonOnly,
  ExpressionRunnerPairSimpleDeprecated,
  ExpressionRunnerSingleStep,
  ExpressionRunnerPairSimple
} from 'src/components/ExpressionRunnerShorthand'
import * as lessonExpressions from 'src/lib/lessonExpressions'
import H from 'src/components/H'
import EmojiForLetter from 'src/components/EmojiForLetter'
import InlineEmojiBoxes from 'src/components/InlineEmojiBoxes'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { cakeVariableName } from 'src/lib/specialVariableNames'

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
    <ExpressionRunnerPairSimpleDeprecated
      expressionContainer={lessonExpressions.e1E1}
    />
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
    <ExpressionRunnerPairSimpleDeprecated
      expressionContainer={lessonExpressions.e1E2}
    />
  ),
  tuqr: (
    <ExpressionRunnerPairSimpleDeprecated
      expressionContainer={lessonExpressions.e1E3}
    />
  ),
  cpkp: (
    <ExpressionRunnerPairSimpleDeprecated
      expressionContainer={lessonExpressions.e1E4}
    />
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
    <ExpressionRunnerPairSimpleDeprecated
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
    <ExpressionRunnerPairSimpleDeprecated
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
    <ExpressionRunnerPairSimpleDeprecated
      expressionContainer={lessonExpressions.e2E1}
    />
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
    <ExpressionRunnerPairSimpleDeprecated
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
    <ExpressionRunnerPairSimpleDeprecated
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
    <ExpressionRunnerPairSimpleDeprecated
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
    <ExpressionRunnerPairSimpleDeprecated
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
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
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
  zywk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      showPriorities
      initialState="default"
    />
  ),
  pqfs: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      showPriorities
      initialState="active"
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
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E2}
      initialState="showCallArg"
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
  gtdu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E3}
      showPriorities
    />
  ),
  qpkm: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E3}
      showPriorities
      isDone
    />
  ),
  udvh: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E3}
      showPriorities
    />
  ),
  dqey: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E3}
      initialState="active"
      showPriorities
    />
  ),
  diis: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e5E3}
      initialState="active"
      skipToTheEnd={false}
      showPriorities
    />
  ),
  tiok: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E1}
      showPriorities
      caption={<H args={{ name: 'secretCodeCaptionSimple', number: 0 }} />}
    />
  ),
  tfho: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E2}
      showPriorities
      caption={<H args={{ name: 'secretCodeCaptionSimple', number: 1 }} />}
    />
  ),
  idcf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E3}
      showPriorities
      caption={<H args={{ name: 'secretCodeCaptionSimple', number: 2 }} />}
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
      caption={<H args={{ name: 'secretCodeCaptionSimple', number: 3 }} />}
    />
  ),
  eozk: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e6E5} />,
  cqpa: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E6}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'A' }} />
      }
    />
  ),
  qsfp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E4}
      showPriorities
      caption={
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
      caption={
        <H args={{ name: 'secretCodeCaption', number: 0, letter: 'a' }} />
      }
      bottomRightBadgeOverrides={{
        b: '🅱️',
        a: '🅰️'
      }}
    />
  ),
  nicg: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E8}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 0, letter: 'd' }} />
      }
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
      caption={<H args={{ name: 'secretCodeAddOneCaption' }} />}
    />
  ),
  mauj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        d: 'highlighted',
        e: 'highlighted'
      }}
    />
  ),
  eavp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  wafy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e6E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={2}
    />
  ),
  badn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E9}
      showPriorities
      isDone
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'b' }} />
      }
    />
  ),
  slyk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E1}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'd' }} />
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
      highlightOverrides={{
        d: 'highlighted',
        e: 'highlighted'
      }}
    />
  ),
  rceu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E2}
      showPriorities
      isDone
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'b' }} />
      }
    />
  ),
  sisn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E3}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'd' }} />
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
      highlightOverrides={{
        d: 'highlighted',
        e: 'highlighted'
      }}
      speed={3}
    />
  ),
  ablz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E4}
      showPriorities
      isDone
      caption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'b' }} />
      }
    />
  ),
  bpza: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E5}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'e' }} />
      }
    />
  ),
  vrvl: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E6}
      showPriorities
      caption={
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
      caption={<H args={{ name: 'secretCodeAddCaption' }} />}
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
      isDone
      caption={
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
      isDone
      caption={
        <H args={{ name: 'secretCodeCaption', number: 4, letter: 'c' }} />
      }
    />
  ),
  ksya: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  drvu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E1}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      caption={<H args={{ name: 'secretCodeMultiplyCaption' }} />}
    />
  ),
  bdlj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E2}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'e' }} />
      }
    />
  ),
  ifwb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E3}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'g' }} />
      }
    />
  ),
  mame: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E4}
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
  ngus: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e8E4}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={5}
      highlightOverrides={{
        e: 'highlighted',
        f: 'highlighted',
        g: 'highlighted',
        h: 'highlighted'
      }}
    />
  ),
  ujfj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E4}
      showPriorities
      isDone
      variableSize={'md'}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 6, letter: 'c' }} />
      }
    />
  ),
  dymt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E5}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'e' }} />
      }
    />
  ),
  mhwq: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E6}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'g' }} />
      }
    />
  ),
  sojz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E7}
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
  ktyt: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e8E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
    />
  ),
  aeyv: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E7}
      showPriorities
      isDone
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'c' }} />
      }
    />
  ),
  bxfv: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E1}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        z: 'highlighted',
        y: 'highlighted'
      }}
    />
  ),
  fqwj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E1}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  tkqr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E2}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        f: 'highlighted',
        g: 'highlighted'
      }}
    />
  ),
  fhlw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E3}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 0, letter: 'f' }} />
      }
    />
  ),
  jliw: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e9E2}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={3}
    />
  ),
  yehl: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E4}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'f' }} />
      }
    />
  ),
  mrky: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E5}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        f: 'highlighted',
        g: 'highlighted'
      }}
    />
  ),
  ctyl: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e9E5}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
    />
  ),
  kupy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E6}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'f' }} />
      }
    />
  ),
  qdkf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      highlightOverrides={{
        f: 'highlighted',
        g: 'highlighted'
      }}
    />
  ),
  gtwk: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e9E7}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
      skipAlphaConvert
    />
  ),
  nlxe: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E1}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      caption={
        <H
          args={{
            name: 'ifCaption',
            ifZero: <EmojiForLetter letter="y" size="mdlg" />,
            ifNonZero: <EmojiForLetter letter="z" size="mdlg" />
          }}
        />
      }
    />
  ),
  dvrw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e9E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      caption={
        <H
          args={{
            name: 'ifCaption',
            ifZero: <EmojiForLetter letter="y" size="mdlg" />,
            ifNonZero: (
              <InlineEmojiBoxes
                emojis={[letterEmojiMapping['w'], letterEmojiMapping['x']]}
              />
            )
          }}
        />
      }
      highlightOverrides={{
        w: 'highlighted',
        x: 'highlighted'
      }}
    />
  ),
  ofee: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E1}
      showPriorities
    />
  ),
  wwdd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E2}
      showPriorities
    />
  ),
  ggxt: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E1}
      showPriorities
      skipAlphaConvert
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      lastAllowedExpressionState="default"
      skipToTheEnd={false}
      resetAtTheEnd
    />
  ),
  gxuj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E3}
      showPriorities
      variableSize="md"
    />
  ),
  aqbs: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E3}
      showPriorities
      skipAlphaConvert
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      maxAllowedDefaultStateCount={3}
      skipToTheEnd={false}
      variableSize="md"
      speed={1.5}
    />
  ),
  opvb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E3}
      showPriorities
      skipAlphaConvert
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      maxAllowedDefaultStateCount={5}
      isDone
      caption={<H args={{ name: 'infinitelyAddingQuestionCaption' }} />}
      variableSize="md"
    />
  ),
  nehp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E4}
      showPriorities
      isDone
      caption={<H args={{ name: 'secretCodeAddOneCaptionWithoutQuestion' }} />}
      variableSize="md"
    />
  ),
  mizw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E5}
      showPriorities
      variableSize="md"
    />
  ),
  wbpx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E1}
      showPriorities
    />
  ),
  gszp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
      highlightOverrides={{
        c: 'highlighted'
      }}
    />
  ),
  kntz: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
      highlightOverrides={{
        d: 'highlighted'
      }}
    />
  ),
  bmms: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E4}
      showPriorities
      skipAlphaConvert
      speed={1.5}
      skipToTheEnd={false}
    />
  ),
  gmcn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E4}
      showPriorities
      skipAlphaConvert
      initialState="showFuncUnbound"
      highlightOverrides={{
        b: 'highlighted'
      }}
      caption={
        <Strong>
          <H
            args={{ name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }}
          />
        </Strong>
      }
      highlightOverrideActiveAfterStart
    />
  ),
  vpjw: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E4}
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      skipAlphaConvert
      showPriorities
      initialState="showFuncUnbound"
      lastAllowedExpressionState="showFuncBound"
      highlightOverrides={{
        b: 'highlighted'
      }}
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  kjyi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E4}
      skipAlphaConvert
      showPriorities
      nextIteration
      initialState="showFuncBound"
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  dpst: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      skipAlphaConvert
      initialState="showFuncUnbound"
      caption={
        <Strong>
          <H
            args={{
              name: 'isCallArgAndFuncUnboundTheSameCaption',
              same: false
            }}
          />
        </Strong>
      }
    />
  ),
  xhwx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E2}
      skipAlphaConvert
      showPriorities
      initialState="showFuncUnbound"
      lastAllowedExpressionState="showFuncBound"
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  ttvy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E2}
      skipAlphaConvert
      showPriorities
      nextIteration
      initialState="showFuncBound"
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  lrja: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E1}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'd' }} />
      }
    />
  ),
  bcae: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      skipAlphaConvert
      containerSize="xs"
      variableSize="md"
    />
  ),
  zuam: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      skipToTheEnd={false}
      skipAlphaConvert
      speed={3}
      containerSize="xs"
      variableSize="md"
    />
  ),
  kfcw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      isDone
      skipAlphaConvert
      containerSize="xs"
      variableSize="md"
      caption={
        <H args={{ name: 'notSecretCodeCaption', number: 2, letter: 'b' }} />
      }
    />
  ),
  jxyg: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      initialState="showFuncUnbound"
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        b: 'highlighted'
      }}
      highlightOverridesCallArgAndFuncUnboundOnly
      highlightOverrideActiveAfterStart
      caption={
        <H
          args={{ name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }}
        />
      }
    />
  ),
  oiwu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      initialState="showFuncUnbound"
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        b: 'highlighted'
      }}
      highlightOverrideActiveAfterStart
      showOnlyFocused
      caption={<H args={{ name: 'mustChangeBothFuncUnboundAndBound' }} />}
    />
  ),
  uqpp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      initialState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        b: 'highlighted'
      }}
      highlightOverrideActiveAfterStart
      showOnlyFocused
    />
  ),
  hxmk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      initialState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        b: 'highlighted'
      }}
      highlightOverrideActiveAfterStart
      caption={
        <H
          args={{ name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }}
        />
      }
    />
  ),
  rzbq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      initialState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
      skipToTheEnd={false}
      speed={3}
    />
  ),
  jlet: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      isDone
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'e' }} />
      }
    />
  ),
  kqip: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      initialState="needsAlphaConvert"
      containerSize="xs"
      variableSize="md"
      explanationsVisibility="visible"
    />
  ),
  tkbr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      initialState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
      explanationsVisibility="visible"
    />
  ),
  gopk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e133E1}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  imgp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E2}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'g' }} />
      }
    />
  ),
  lxnu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  ccon: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      skipToTheEnd={false}
      containerSize="xs"
      variableSize="md"
      speed={8}
    />
  ),
  npfx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E3}
      isDone
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'b' }} />
      }
    />
  ),
  pnob: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e133E1}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeMinusOneCaption' }} />}
    />
  ),
  rqdn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      explanationsVisibility="hiddenInitialPausedOnly"
      lastAllowedExpressionState="needsAlphaConvert"
      containerSize="xs"
      variableSize="md"
      speed={5}
      skipToTheEnd={false}
    />
  ),
  fiab: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E4}
      showPriorities
      explanationsVisibility="hiddenInitialPausedOnly"
      lastAllowedExpressionState="needsAlphaConvert"
      containerSize="xs"
      variableSize="md"
      speed={5}
      skipToTheEnd={false}
    />
  ),
  plxd: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      explanationsVisibility="visible"
      initialState="needsAlphaConvert"
      finalState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
    />
  ),
  zaoc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E4}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeTwoMinusOneCaption' }} />}
    />
  ),
  xekr: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e13E5} />
  ),
  lial: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E6}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeTwoMinusOneCaption' }} />}
    />
  ),
  uqts: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E6}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  ojma: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e13E7} />
  ),
  yykk: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E7}
    />
  ),
  exww: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E8}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  qgun: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E8}
      showPriorities
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        g: 'highlighted',
        h: 'highlighted'
      }}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'g' }} />
      }
    />
  ),
  yvia: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E9}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  qifg: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E10}
      showPriorities
      containerSize="xs"
      variableSize="md"
      highlightOverrides={{
        a: 'highlighted',
        b: 'highlighted',
        c: 'highlighted',
        d: 'highlighted',
        e: 'highlighted',
        f: 'highlighted'
      }}
      caption={
        <H args={{ name: 'secretCodeLetterMinusOneCaption', letter: 'i' }} />
      }
    />
  ),
  ufyc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E11}
      showPriorities
    />
  ),
  pbgd: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E12}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  hvdn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      caption={
        <H
          args={{
            name: 'ifCaption',
            ifZero: <EmojiForLetter letter="y" size="mdlg" />,
            ifNonZero: <EmojiForLetter letter="z" size="mdlg" />
          }}
        />
      }
    />
  ),
  vxnm: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e14E2} />
  ),
  xefx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E2}
      skipToTheEnd={false}
    />
  ),
  wcsz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      explanationsVisibility="visible"
      initialState="conditionActive"
    />
  ),
  psqo: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      explanationsVisibility="visible"
      initialState="falseCaseActive"
    />
  ),
  xsby: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      isDone
    />
  ),
  repd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
    />
  ),
  cnoq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E3}
      skipToTheEnd={false}
      showPriorities
      speed={1.5}
    />
  ),
  dwnj: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E3}
      skipToTheEnd={false}
      showPriorities
      lastAllowedExpressionState="default"
    />
  ),
  guuf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
      explanationsVisibility="visible"
      nextIteration
      initialState="conditionActive"
    />
  ),
  lrrr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
      nextIteration
      explanationsVisibility="visible"
      initialState="trueCaseActive"
    />
  ),
  dpar: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
      speed={1.5}
      skipToTheEnd={false}
      nextIteration
      explanationsVisibility="visible"
      initialState="trueCaseOnly"
    />
  ),
  ylil: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E4}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  vqcw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E5}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  dcfi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E6}
      showPriorities
      skipToTheEnd={false}
      containerSize={'xs'}
      variableSize={'md'}
      speed={5}
    />
  ),
  bmnc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E6}
      isDone
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'l' }} />
      }
    />
  ),
  ufze: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
      isDone
    />
  ),
  zxux: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      variableSize="md"
    />
  ),
  itzl: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      initialState="active"
      finalState="magicalExpanded"
      variableSize="md"
    />
  ),
  gtnr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIteration
      highlightOverrideActiveAfterStart
      highlightOverrides={{
        magical: 'highlighted'
      }}
      variableSize="md"
    />
  ),
  syfp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIteration
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={1}
      speed={1.5}
      variableSize="md"
    />
  ),
  wdol: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={2}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={2}
      speed={1.5}
      variableSize="md"
    />
  ),
  luir: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={3}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={3}
      speed={1.5}
      variableSize="md"
    />
  ),
  ifxr: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      finalNextIterations={4}
      finalState="default"
      finalFastForward
      finalCaption={
        <H
          args={{ name: 'magicTransition', numberBefore: 3, numberAfter: 2 }}
        />
      }
      variableSize="md"
    />
  ),
  mihy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={4}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={7}
      speed={1.5}
      variableSize="md"
    />
  ),
  davn: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      initialState="default"
      nextIterations={4}
      finalNextIterations={8}
      finalState="default"
      finalFastForward
      finalCaption={
        <H
          args={{ name: 'magicTransition', numberBefore: 2, numberAfter: 1 }}
        />
      }
      variableSize="md"
    />
  ),
  zvet: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={8}
      skipToTheEnd={false}
      lastAllowedExpressionState="conditionActive"
      lastAllowedExpressionStateAfterIterations={8}
      speed={1.5}
      variableSize="md"
    />
  ),
  umce: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={8}
      initialState="trueCaseActive"
      variableSize="md"
    />
  ),
  orhx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      nextIterations={8}
      initialState="trueCaseActive"
      variableSize="md"
    />
  ),
  dyef: (
    <ExpressionRunnerSimple
      explanationsVisibility="visible"
      expressionContainer={lessonExpressions.e15E1}
      isDone
      showPriorities
      variableSize="md"
    />
  ),
  xtjt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      isDone
      showPriorities
      variableSize="md"
    />
  ),
  mnfh: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      skipToTheEnd={false}
      speed={7}
      variableSize="md"
    />
  ),
  yklt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E2}
      showPriorities
      variableSize="md"
    />
  ),
  fsmk: (
    <ExpressionRunnerSimple
      isDone
      expressionContainer={lessonExpressions.e15E2}
      showPriorities
      variableSize="md"
    />
  ),
  peoq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E2}
      showPriorities
      skipToTheEnd={false}
      speed={8}
      variableSize="md"
    />
  ),
  xsux: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E2}
      showPriorities
      isDone
      variableSize="md"
    />
  ),
  osqg: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E3}
      skipToTheEnd={false}
      showPriorities
      speed={10}
      variableSize="md"
    />
  ),
  jcvr: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E3}
      showPriorities
      isDone
      variableSize="md"
    />
  ),
  miez: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e15E4} />
  ),
  fapu: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e15E5} />
  ),
  hknv: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      initialState="default"
      finalState="default"
      finalNextIteration
      variableSize="md"
    />
  ),
  njwf: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E6}
      showPriorities
      initialState="default"
      finalState="default"
      finalNextIteration
      variableSize="md"
      highlightOverrideActiveAfterStart
      highlightOverrides={{
        [cakeVariableName]: 'highlighted'
      }}
    />
  ),
  njmb: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E6}
      showPriorities
      skipToTheEnd={false}
      speed={10}
      variableSize="md"
    />
  ),
  hpiv: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E7}
      showPriorities
      variableSize="md"
      initialState="default"
      finalState="default"
      finalNextIteration
      highlightOverrideActiveAfterStart
      highlightOverrides={{
        magicalHighlightWorkaround: 'highlighted'
      }}
    />
  ),
  sydo: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e15E8} />
  ),
  hzlj: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.ycTest}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      skipToTheEnd={false}
      speed={5}
    />
  )
}
