import React from 'react'
import {
  ExpressionRunnerSimple,
  ExpressionRunnerPlayButtonOnly,
  ExpressionRunnerPairSimpleDeprecated,
  ExpressionRunnerSingleStep,
  ExpressionRunnerPairSimple
} from 'src/components/ExpressionRunnerShorthand'
import * as lessonExpressions from 'src/lib/lessonExpressions'
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
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E2}
      isDone
    />
  ),
  tuqr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E3}
      isDone
    />
  ),
  cpkp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E4}
      isDone
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
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E1}
      initialState="betaReducePreviewCrossed"
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
  jwzh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E2}
      initialState="betaReducePreviewBefore"
    />
  ),
  knhw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e1E2}
      initialState="betaReducePreviewCrossed"
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
  udic: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E1}
      initialState="showFuncUnbound"
      showPriorities
    />
  ),
  xzqu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e3E1}
      nextIteration
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
  jmmp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e5E3}
      showPriorities
      highlightOverrides={{
        b: 'highlighted'
      }}
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
  howy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E12}
      showPriorities
      variableSize="md"
    />
  ),
  imqy: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E13}
      showPriorities
      variableSize="md"
      caption={
        <H args={{ name: 'secretCodeCaption', number: 5, letter: 'i' }} />
      }
      bottomRightBadgeOverrides={{
        j: '🅱️',
        i: '🅰️'
      }}
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
  stio: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E5}
      highlightOverrides={{
        Amult: 'highlighted'
      }}
      caption={<H args={{ name: 'numberOfAIsSecretCodeCaption' }} />}
    />
  ),
  cqpa: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E6}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'A' }} />
      }
    />
  ),
  blre: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E1}
      showPriorities
      bottomRightBadgeOverrides={{
        b: '🅱️',
        a: '🅰️'
      }}
    />
  ),
  jmyv: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E2}
      showPriorities
      bottomRightBadgeOverrides={{
        d: '🅱️',
        c: '🅰️'
      }}
    />
  ),
  ilnb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E3}
      showPriorities
      bottomRightBadgeOverrides={{
        f: '🅱️',
        e: '🅰️'
      }}
    />
  ),
  qvxe: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E11}
      showPriorities
      bottomRightBadgeOverrides={{
        f: '🅱️',
        e: '🅰️'
      }}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'e' }} />
      }
    />
  ),
  qsfp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E4}
      showPriorities
      bottomRightBadgeOverrides={{
        h: '🅱️',
        g: '🅰️'
      }}
    />
  ),
  sfop: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e6E10}
      showPriorities
      bottomRightBadgeOverrides={{
        h: '🅱️',
        g: '🅰️'
      }}
      caption={
        <H args={{ name: 'secretCodeCaption', number: 3, letter: 'g' }} />
      }
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
      speed={1.75}
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
  fatm: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E11}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      highlightOverrides={{
        g: 'highlighted',
        h: 'highlighted'
      }}
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
      variableSize={'sm'}
      highlightOverrides={{
        g: 'highlighted',
        h: 'highlighted'
      }}
    />
  ),
  entr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
    />
  ),
  brrh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E10}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      highlightOverrides={{
        e: 'highlighted',
        f: 'highlighted'
      }}
    />
  ),
  rome: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E8}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      skipToTheEnd={false}
      speed={5}
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
  dyov: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e7E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      highlightOverrides={{
        e: 'highlighted',
        f: 'highlighted'
      }}
    />
  ),
  unck: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e7E9}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
      skipToTheEnd={false}
      speed={5}
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
      variableSize={'sm'}
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
  pzwe: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e8E4}
      showPriorities
      containerSize={'xs'}
      variableSize={'sm'}
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
      speed={5}
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
            ifZero: 'y',
            ifNonZero: 'z'
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
            ifZero: 'y',
            ifNonZero: ['w', 'x']
          }}
        />
      }
      highlightOverrides={{
        w: 'highlighted',
        x: 'highlighted'
      }}
    />
  ),
  wbpx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E1}
      showPriorities
    />
  ),
  gszp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E2}
      showPriorities
      skipToTheEnd={false}
      speed={1.75}
      highlightOverrides={{
        c: 'highlighted'
      }}
    />
  ),
  kntz: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E3}
      showPriorities
      skipToTheEnd={false}
      speed={1.75}
      highlightOverrides={{
        d: 'highlighted'
      }}
    />
  ),
  bmms: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E4}
      showPriorities
      skipAlphaConvert
      speed={1.75}
      skipToTheEnd={false}
    />
  ),
  gmcn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E4}
      showPriorities
      skipAlphaConvert
      initialState="showFuncUnbound"
      highlightOverrides={{
        b: 'highlighted'
      }}
      caption={
        <H
          args={{ name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }}
        />
      }
      highlightOverrideActiveAfterStart
    />
  ),
  vpjw: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E4}
      explanationsVisibility="hiddenInitialAndLastPausedOnly"
      skipAlphaConvert
      showPriorities
      initialState="showFuncUnbound"
      lastAllowedExpressionState="showFuncBound"
      highlightOverrides={{
        b: 'highlighted'
      }}
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  kjyi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E4}
      skipAlphaConvert
      showPriorities
      nextIteration
      initialState="showFuncBound"
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  dpst: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e10E2}
      showPriorities
      skipAlphaConvert
      initialState="showFuncUnbound"
      caption={
        <H
          args={{
            name: 'isCallArgAndFuncUnboundTheSameCaption',
            same: false
          }}
        />
      }
    />
  ),
  xhwx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E2}
      skipAlphaConvert
      showPriorities
      initialState="showFuncUnbound"
      lastAllowedExpressionState="showFuncBound"
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  ttvy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e10E2}
      skipAlphaConvert
      showPriorities
      nextIteration
      initialState="showFuncBound"
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  lrja: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E1}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 1, letter: 'd' }} />
      }
    />
  ),
  bcae: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      skipAlphaConvert
      containerSize="xs"
      variableSize="md"
    />
  ),
  zuam: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e11E2}
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
      expressionContainer={lessonExpressions.e11E2}
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
      expressionContainer={lessonExpressions.e11E2}
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
      expressionContainer={lessonExpressions.e11E3}
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
      expressionContainer={lessonExpressions.e11E3}
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
      expressionContainer={lessonExpressions.e11E3}
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
      expressionContainer={lessonExpressions.e11E3}
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
      expressionContainer={lessonExpressions.e11E3}
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
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      initialState="needsAlphaConvert"
      containerSize="xs"
      variableSize="md"
      explanationsVisibility="visible"
    />
  ),
  tkbr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e11E2}
      showPriorities
      initialState="alphaConvertDone"
      containerSize="xs"
      variableSize="md"
      explanationsVisibility="visible"
    />
  ),
  gopk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E1}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  imgp: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E2}
      showPriorities
      caption={
        <H args={{ name: 'secretCodeCaption', number: 2, letter: 'g' }} />
      }
    />
  ),
  lxnu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  ccon: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E3}
      showPriorities
      skipToTheEnd={false}
      containerSize="xs"
      variableSize="sm"
      speed={5}
    />
  ),
  npfx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E3}
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
      expressionContainer={lessonExpressions.e12E1}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeMinusOneCaption' }} />}
    />
  ),
  rqdn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E3}
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
      expressionContainer={lessonExpressions.e12E4}
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
      expressionContainer={lessonExpressions.e12E3}
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
      expressionContainer={lessonExpressions.e12E4}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeTwoMinusOneCaption' }} />}
    />
  ),
  xekr: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e12E5} />
  ),
  lial: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E6}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'secretCodeTwoMinusOneCaption' }} />}
    />
  ),
  uqts: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E6}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  ojma: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e12E7} />
  ),
  yykk: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E7}
    />
  ),
  exww: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E8}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  qgun: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E8}
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
      expressionContainer={lessonExpressions.e12E9}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  qifg: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E10}
      showPriorities
      containerSize="xs"
      variableSize="md"
    />
  ),
  ssns: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E10}
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
    />
  ),
  tboe: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E13}
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
    />
  ),
  ufyc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e12E11}
      showPriorities
    />
  ),
  pbgd: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e12E12}
      showPriorities
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  hvdn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E1}
      caption={
        <H
          args={{
            name: 'ifCaption',
            ifZero: 'y',
            ifNonZero: 'z'
          }}
        />
      }
    />
  ),
  vxnm: (
    <ExpressionRunnerSimple expressionContainer={lessonExpressions.e13E2} />
  ),
  xefx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E2}
      skipToTheEnd={false}
    />
  ),
  wcsz: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E2}
      explanationsVisibility="visible"
      initialState="conditionActive"
    />
  ),
  psqo: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E2}
      explanationsVisibility="visible"
      initialState="falseCaseActive"
    />
  ),
  xsby: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E2}
      isDone
    />
  ),
  repd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
    />
  ),
  cnoq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E3}
      skipToTheEnd={false}
      showPriorities
      speed={1.75}
    />
  ),
  dwnj: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E3}
      skipToTheEnd={false}
      showPriorities
      lastAllowedExpressionState="default"
    />
  ),
  guuf: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      explanationsVisibility="visible"
      nextIteration
      initialState="conditionActive"
    />
  ),
  lrrr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      nextIteration
      explanationsVisibility="visible"
      initialState="trueCaseActive"
    />
  ),
  dpar: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      speed={1.75}
      skipToTheEnd={false}
      nextIteration
      explanationsVisibility="visible"
      initialState="trueCaseOnly"
    />
  ),
  ylil: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E4}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  vqcw: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E5}
      showPriorities
      containerSize={'xs'}
      variableSize={'md'}
    />
  ),
  dcfi: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E6}
      showPriorities
      skipToTheEnd={false}
      containerSize={'xs'}
      variableSize={'md'}
      speed={5}
    />
  ),
  bmnc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E6}
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
      expressionContainer={lessonExpressions.e13E3}
      showPriorities
      isDone
    />
  ),
  rreb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E7}
      caption={<H args={{ name: 'whatCanComputeFactorial', start: 3 }} />}
    />
  ),
  kqzn: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E8}
      caption={<H args={{ name: 'whatCanComputeFactorial', start: 4 }} />}
    />
  ),
  aimh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E12}
      caption={<H args={{ name: 'whatCanComputeFactorial', start: 5 }} />}
    />
  ),
  lyod: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E9}
      caption={<H args={{ name: 'secretCodeMultiplyCaption' }} />}
    />
  ),
  imba: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E10}
      caption={<H args={{ name: 'secretCodeMultiplyCaption' }} />}
    />
  ),
  zifr: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e13E11}
    />
  ),
  omlc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e13E11}
      caption={
        <H args={{ name: 'secretCodeMultiplyCaption', arg1: 2, arg2: 3 }} />
      }
    />
  ),
  zxux: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      variableSize="md"
    />
  ),
  itzl: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      initialState="active"
      finalState="magicalExpanded"
      variableSize="md"
    />
  ),
  gtnr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIteration
      highlightOverrideActiveAfterStart
      highlightOverrides={{
        magical: 'highlighted'
      }}
      variableSize="md"
      caption={<H args={{ name: 'witchAppearsAgainCaption' }} />}
    />
  ),
  cfms: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E6}
      showPriorities
      nextIteration
      highlightOverrideActiveAfterStart
      highlightOverrides={{
        magical: 'highlighted'
      }}
      variableSize="md"
      caption={<H args={{ name: 'witchAppearsAgainCaption' }} />}
    />
  ),
  syfp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIteration
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={1}
      variableSize="md"
    />
  ),
  wdol: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={2}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={2}
      variableSize="md"
      highlightNumber={2}
    />
  ),
  luir: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={3}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={3}
      variableSize="md"
    />
  ),
  ifxr: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      finalNextIterations={4}
      finalState="default"
      finalFastForward
      variableSize="md"
      finalCaption={
        <H args={{ name: 'magicalChangedCaption', fromNumber: 3 }} />
      }
      finalArgPriorityAggHighlights={[1]}
      finalFuncPriorityAggHighlights={[1, 2]}
    />
  ),
  vkpm: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={4}
      variableSize="sm"
      initialState="active"
      finalState="magicalExpanded"
    />
  ),
  mihy: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={4}
      skipToTheEnd={false}
      initialState="magicalExpanded"
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={7}
      speed={1.75}
      variableSize="sm"
    />
  ),
  davn: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      initialState="default"
      nextIterations={4}
      finalNextIterations={8}
      finalState="default"
      finalFastForward
      finalCaption={
        <H args={{ name: 'magicalChangedCaption', fromNumber: 2 }} />
      }
      variableSize="sm"
      finalArgPriorityAggHighlights={[1]}
      finalFuncPriorityAggHighlights={[3, 4]}
    />
  ),
  qltx: (
    <ExpressionRunnerSingleStep
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={8}
      initialState="active"
      finalState="magicalExpanded"
      variableSize="sm"
    />
  ),
  zvet: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={8}
      skipToTheEnd={false}
      lastAllowedExpressionState="conditionActive"
      lastAllowedExpressionStateAfterIterations={8}
      initialState="magicalExpanded"
      speed={1.75}
      variableSize="sm"
    />
  ),
  yvty: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={8}
      explanationsVisibility="visible"
      initialState="conditionActive"
      variableSize="sm"
    />
  ),
  umce: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={8}
      initialState="trueCaseActive"
      explanationsVisibility="visible"
      variableSize="sm"
    />
  ),
  orhx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={12}
      variableSize="sm"
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  wqdb: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={12}
      variableSize="sm"
    />
  ),
  xtjt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      isDone
      showPriorities
      variableSize="sm"
    />
  ),
  mnfh: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      skipToTheEnd={false}
      speed={5}
      variableSize="sm"
    />
  ),
  yklt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      showPriorities
      variableSize="sm"
    />
  ),
  fsmk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      showPriorities
      nextIterations={16}
      variableSize="sm"
    />
  ),
  peoq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E2}
      showPriorities
      skipToTheEnd={false}
      speed={5}
      variableSize="xs"
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={15}
    />
  ),
  nfkp: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e14E2}
      showPriorities
      skipToTheEnd={false}
      speed={1.75}
      nextIterations={16}
      variableSize="sm"
    />
  ),
  osqg: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e14E3}
      showPriorities
      variableSize="sm"
      isDone
      intermediateState="default"
      intermediateNextIterations={20}
    />
  ),
  vrwt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      variableSize="md"
    />
  ),
  lodr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E2}
      variableSize="md"
    />
  ),
  fjyk: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E3}
      variableSize="md"
    />
  ),
  miez: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E4}
      variableSize="md"
    />
  ),
  fapu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E5}
      variableSize="sm"
    />
  ),
  xsve: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e14E6}
      variableSize="md"
      explanationsVisibility="visible"
      hideFirstExplanations
      finalState="magicalExpanded"
      finalFastForward
    />
  ),
  urhc: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      variableSize="sm"
      isDone
      intermediateState="default"
      intermediateNextIterations={12}
    />
  ),
  tdau: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E1}
      showPriorities
      highlightOverrides={{
        s: 'highlighted'
      }}
      variableSize="md"
      caption={<H args={{ name: 'witchReplacedCaption' }} />}
    />
  ),
  lkwr: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E2}
      showPriorities
      highlightOverrides={{
        s: 'highlighted'
      }}
      variableSize="md"
      containerSize="xs"
    />
  ),
  osih: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E3}
      showPriorities
      highlightOverrides={{
        a: 'highlighted',
        b: 'highlighted'
      }}
      variableSize="xs"
      containerSize="xs"
    />
  ),
  dkbt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E3}
      showPriorities
      variableSize="xs"
      containerSize="xs"
    />
  ),
  hzlj: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E4}
      showPriorities
      containerSize="xs"
      variableSize="xs"
    />
  ),
  plts: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      skipToTheEnd={false}
      containerSize="xs"
      variableSize="xxs"
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={5}
      speed={4}
    />
  ),
  pnux: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      highlightFunctions
      containerSize="xs"
      variableSize="xxs"
      nextIterations={6}
    />
  ),
  zhby: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E6}
      showPriorities
      variableSize="md"
      highlightOverrides={{
        abbreviated: 'highlighted'
      }}
      highlightOverrideActiveAfterStart
    />
  ),
  xcnu: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E6}
      showPriorities
      variableSize="md"
      caption={<H args={{ name: 'ycChangedCaption', fromNumber: 3 }} />}
      argPriorityAggHighlights={[1]}
      funcPriorityAggHighlights={[1, 2]}
    />
  ),
  iisx: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={4}
      initialState="default"
      variableSize="md"
      caption={<H args={{ name: 'magicalChangedCaption', fromNumber: 3 }} />}
      argPriorityAggHighlights={[1]}
      funcPriorityAggHighlights={[1, 2]}
    />
  ),
  pzui: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      nextIterations={6}
      skipToTheEnd={false}
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={10}
      speed={4}
    />
  ),
  kfrt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      nextIterations={11}
      highlightFunctions
    />
  ),
  iygh: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E7}
      showPriorities
      variableSize="md"
      highlightOverrides={{
        abbreviated: 'highlighted'
      }}
      highlightOverrideActiveAfterStart
    />
  ),
  ines: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E7}
      showPriorities
      variableSize="md"
      caption={<H args={{ name: 'ycChangedCaption', fromNumber: 2 }} />}
      argPriorityAggHighlights={[1]}
      funcPriorityAggHighlights={[3, 4]}
    />
  ),
  gcnt: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e14E1}
      showPriorities
      nextIterations={8}
      initialState="default"
      variableSize="md"
      caption={<H args={{ name: 'magicalChangedCaption', fromNumber: 2 }} />}
      argPriorityAggHighlights={[1]}
      funcPriorityAggHighlights={[3, 4]}
    />
  ),
  pgtx: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      nextIterations={11}
      skipToTheEnd={false}
      lastAllowedExpressionState="conditionActive"
      lastAllowedExpressionStateAfterIterations={14}
      speed={4}
    />
  ),
  gswd: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      nextIterations={14}
      skipToTheEnd={false}
      initialState="conditionActive"
      lastAllowedExpressionState="default"
      lastAllowedExpressionStateAfterIterations={15}
    />
  ),
  jruw: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      nextIterations={16}
      skipToTheEnd={false}
      speed={1.75}
    />
  ),
  mscz: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E5}
      showPriorities
      variableSize="xs"
      containerSize="xs"
      isDone
      intermediateState="default"
      intermediateNextIterations={16}
    />
  ),
  jreq: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E8}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      lastAllowedExpressionState="default"
      skipToTheEnd={false}
      speed={5}
      lastAllowedExpressionStateAfterIterations={20}
      superFastForward
    />
  ),
  uitu: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E8}
      showPriorities
      containerSize="xs"
      variableSize="xs"
      isDone
      nextIterations={21}
      finalFastForward
    />
  ),
  bozr: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E9}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      lastAllowedExpressionState="default"
      skipToTheEnd={false}
      speed={5}
      lastAllowedExpressionStateAfterIterations={25}
      superFastForward
    />
  ),
  wxqy: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E9}
      showPriorities
      containerSize="xs"
      variableSize="xs"
      isDone
      nextIterations={26}
      finalFastForward
    />
  ),
  wcwd: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E10}
      showPriorities
      variableSize="xs"
      containerSize="xs"
    />
  ),
  bcgc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E11}
      showPriorities
      containerSize="xs"
      variableSize="xs"
    />
  ),
  szou: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E12}
      showPriorities
      containerSize="xs"
      variableSize="xs"
      caption={<H args={{ name: 'changedToPowerCaption' }} />}
    />
  ),
  ysji: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E12}
      isDone
    />
  ),
  ilrn: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E12}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      lastAllowedExpressionState="default"
      skipToTheEnd={false}
      speed={5}
      lastAllowedExpressionStateAfterIterations={15}
      superFastForward
    />
  ),
  dret: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E12}
      showPriorities
      containerSize="xs"
      variableSize="xs"
      nextIterations={16}
      finalFastForward
      isDone
    />
  ),
  bpsz: (
    <ExpressionRunnerPlayButtonOnly
      expressionContainer={lessonExpressions.e15E13}
      showPriorities
      containerSize="xs"
      variableSize="xxs"
      lastAllowedExpressionState="default"
      skipToTheEnd={false}
      speed={5}
      lastAllowedExpressionStateAfterIterations={20}
      superFastForward
    />
  ),
  zfcz: (
    <ExpressionRunnerPairSimple
      expressionContainer={lessonExpressions.e15E13}
      showPriorities
      containerSize="xs"
      variableSize="xs"
      nextIterations={21}
      finalFastForward
      isDone
    />
  ),
  jtai: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E14}
      showPriorities
      containerSize="xs"
      variableSize="xs"
    />
  ),
  nmoc: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E15}
      showPriorities
      containerSize="xs"
      variableSize="sm"
    />
  ),
  cnef: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E15}
      showPriorities
      containerSize="xs"
      variableSize="sm"
      highlightOverrides={{
        a: 'highlighted',
        b: 'highlighted'
      }}
    />
  ),
  news: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E16}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'thisIsYCombinatorCaption' }} />}
    />
  ),
  xrzv: (
    <ExpressionRunnerSimple
      expressionContainer={lessonExpressions.e15E17}
      showPriorities
      containerSize="xs"
      variableSize="md"
      caption={<H args={{ name: 'thisIsYCombinatorCaption', too: true }} />}
    />
  ),
  ytcf: <ExpressionRunnerSimple expressionContainer={lessonExpressions.e16E1} />
}
