import React from 'react'
import { Strong } from 'src/components/ContentTags'
import {
  ExpressionRunnerSimple,
  ExpressionRunnerPlayButtonOnly,
  ExpressionRunnerPairSimple,
  ExpressionRunnerSingleStep
} from 'src/components/Yc/ExpressionRunnerShorthand'
import * as lessonExpressions from 'src/lib/yc/lessonExpressions'
import H from 'src/components/H'
import EmojiForLetter from 'src/components/EmojiForLetter'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'

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
  ongi: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11NewE1}
      showPriorities
    />
  ),
  lxrg: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11NewE2}
      showPriorities
    />
  ),
  wdpv: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11NewE2}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  rssa: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11NewE2}
      showPriorities
      isDone
    />
  ),
  dzju: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11NewE3}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  iphu: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11NewE4}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
      skipAlphaConvert
    />
  ),
  ddrz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11NewE4}
      showPriorities
      skipAlphaConvert
      isDone
    />
  ),
  ypik: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11NewE4}
      showPriorities
      skipAlphaConvert
      lastAllowedExpressionState="default"
      speed={1.5}
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      skipToTheEnd={false}
    />
  ),
  jpum: (
    <ExpressionRunnerPlayButtonOnly
      nextIteration
      expressionContainer={lessonExpressions.e11NewE4}
      showPriorities
      skipAlphaConvert
      speed={1.5}
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      skipToTheEnd={false}
    />
  ),
  wbpx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11zE1}
      showPriorities
    />
  ),
  gszp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11zE2}
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
      expressionContainer={lessonExpressions.e11zE3}
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
      expressionContainer={lessonExpressions.e11zE4}
      showPriorities
      skipAlphaConvert
      speed={1.5}
      skipToTheEnd={false}
    />
  ),
  gmcn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11zE4}
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
      expressionContainer={lessonExpressions.e11zE4}
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
      expressionContainer={lessonExpressions.e11zE4}
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
      expressionContainer={lessonExpressions.e11zE2}
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
      expressionContainer={lessonExpressions.e11zE2}
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
      expressionContainer={lessonExpressions.e11zE2}
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
      expressionContainer={lessonExpressions.e11zE5}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'd' }} />
      }
    />
  ),
  bcae: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11zE6}
      showPriorities
      skipAlphaConvert
      containerSize="xs"
      variableSize="md"
    />
  ),
  zuam: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11zE6}
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
      expressionContainer={lessonExpressions.e11zE6}
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
  zayk: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.alphaConvertTest}
      showPriorities
      skipAlphaConvert
      speed={1.5}
      skipToTheEnd={false}
    />
  ),
  azge: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E1}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'a' }} />
      }
      showPriorities
    />
  ),
  eigf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  eqbo: (
    <ExpressionRunnerPlayButtonOnly
      skipToTheEnd={false}
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      speed={4}
      skipAlphaConvert
    />
  ),
  xlwo: (
    <ExpressionRunnerSimple
      isDone
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      skipAlphaConvert
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  fdpd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      skipAlphaConvert
      highlightOverrides={{
        b: 'highlighted'
      }}
      highlightOverridesCallArgAndFuncUnboundOnly
      highlightOverrideActiveAfterStart
      initialState="showFuncUnbound"
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  zlgw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E4}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'a' }} />
      }
      showPriorities
    />
  ),
  ttgq: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E5}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  xrzv: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E6}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipAlphaConvert
      speed={4}
      skipToTheEnd={false}
      initialState="showFuncUnbound"
    />
  ),
  pyfd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E6}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipAlphaConvert
      isDone
    />
  ),
  dygl: (
    <ExpressionRunnerSimple
      explanationsVisibility="visible"
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      initialState="needsAlphaConvert"
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  kogx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E7}
      showPriorities
      showOnlyFocused
      initialState="needsAlphaConvert"
      containerSize={'xs'}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'a' }} />
      }
    />
  ),
  qxhk: (
    <ExpressionRunnerSimple
      explanationsVisibility="visible"
      expressionContainer={lessonExpressions.e11E7}
      showPriorities
      showOnlyFocused
      initialState="alphaConvertDone"
      containerSize={'xs'}
    />
  ),
  bpyh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      initialState="alphaConvertDone"
      containerSize={'xs'}
      variableSize={'md'}
      caption={
        <H args={{ name: 'noCallArgFuncUnboundOverlap', letter: 'b' }} />
      }
    />
  ),
  sqnu: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      initialState="alphaConvertDone"
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={4}
    />
  ),
  fjxw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E3}
      showPriorities
      isDone
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  bcso: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E1}
      showPriorities
    />
  ),
  klah: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  agso: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      isDone
    />
  ),
  hqbn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      skipToTheEnd={false}
      speed={1.5}
    />
  ),
  wnxr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      isDone
    />
  ),
  oyde: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e12E2}
      variableSize={'md'}
    />
  ),
  caqd: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e12E3}
      variableSize={'md'}
    />
  ),
  uixu: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e12E4}
      variableSize={'md'}
    />
  ),
  qiri: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E1}
      showPriorities
      variableSize={'md'}
    />
  ),
  wawo: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E5}
      showPriorities
      skipToTheEnd={false}
    />
  ),
  fcvl: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.subtractionTest}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  hzlj: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.ycTest}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
      skipToTheEnd={false}
      speed={5}
    />
  )
}
