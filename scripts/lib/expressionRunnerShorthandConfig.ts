import * as lessonExpressions from 'src/lib/lessonExpressions'
import {
  ExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'
import { HProps } from 'src/types/HTypes'

export const expressionRunnerSimpleConfigDefault = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden',
  variableSize: 'lg',
  skipAlphaConvert: false
}

interface ExpressionRunnerSimpleConfig {
  runner: 'simple'
  expressionContainer: SteppedExpressionContainer
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  isDone?: boolean
  skipAlphaConvert?: boolean
  nextIteration?: boolean
  nextIterations?: number
  showPriorities?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  caption?: HProps['args']
  bottomRightBadgeOverrides?: ExpressionRunnerProps['bottomRightBadgeOverrides']
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  highlightOverrideActiveAfterStart?: ExpressionRunnerProps['highlightOverrideActiveAfterStart']
  highlightOverridesCallArgAndFuncUnboundOnly?: ExpressionRunnerProps['highlightOverridesCallArgAndFuncUnboundOnly']
  showOnlyFocused?: ExpressionRunnerProps['showOnlyFocused']
  highlightFunctions?: ExpressionRunnerProps['highlightFunctions']
  argPriorityAggHighlights?: readonly number[]
  funcPriorityAggHighlights?: readonly number[]
}

export function isExpressionRunnerSimpleConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSimpleConfig {
  return c.runner === 'simple'
}

export const expressionRunnerPlayButtonOnlyConfigDefault = {
  initialState: 'default',
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
  showPriorities: false,
  speed: 1,
  skipAlphaConvert: false,
  variableSize: 'lg',
  explanationsVisibility: 'hiddenInitialPausedOnly'
}

export function isExpressionRunnerPlayButtonOnlyConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerPlayButtonOnlyConfig {
  return c.runner === 'playButtonOnly'
}

interface ExpressionRunnerPlayButtonOnlyConfig {
  runner: 'playButtonOnly'
  expressionContainer: SteppedExpressionContainer
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  skipToTheEnd?: boolean
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  nextIteration?: boolean
  nextIterations?: number
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  speed?: number
  skipAlphaConvert?: boolean
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  superFastForward?: ExpressionRunnerProps['superFastForward']
  highlightNumber?: number
}

export const expressionRunnerSingleStepConfigDefault = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  variableSize: 'lg'
}

export function isExpressionRunnerSingleStepConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSingleStepConfig {
  return c.runner === 'singleStep'
}

interface ExpressionRunnerSingleStepConfig {
  runner: 'singleStep'
  expressionContainer: SteppedExpressionContainer
  initialState: ExpressionContainer['previouslyChangedExpressionState']
  finalState: ExpressionContainer['previouslyChangedExpressionState']
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  nextIteration?: boolean
  nextIterations?: number
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}

export type ExpressionRunnerShorthandConfig =
  | ExpressionRunnerSimpleConfig
  | ExpressionRunnerPlayButtonOnlyConfig
  | ExpressionRunnerSingleStepConfig

const config: Record<string, ExpressionRunnerShorthandConfig> = {
  ilpo: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1
  },
  imyd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E2
  },
  emmb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E3
  },
  jozw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E4
  },
  itbm: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E1
  },
  zwpj: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E2
  },
  dqkc: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E3
  },
  ldox: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E4
  },
  bgfl: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E2,
    isDone: true
  },
  tuqr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E3,
    isDone: true
  },
  cpkp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E4,
    isDone: true
  },
  loai: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E5
  },
  vvjn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E5,
    isDone: true
  },
  hbgo: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E6
  },
  olef: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E7
  },
  zzyu: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E5
  },
  qpjt: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E6
  },
  ozbe: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'active',
    finalState: 'showFuncBound'
  },
  rqjo: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'showFuncBound',
    finalState: 'betaReducePreviewBefore'
  },
  zzxj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'showFuncBound'
  },
  evqx: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'betaReducePreviewBefore',
    finalState: 'betaReducePreviewAfter'
  },
  keck: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'betaReducePreviewBefore'
  },
  msiw: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'betaReducePreviewAfter',
    finalState: 'betaReducePreviewCrossed'
  },
  qoms: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'betaReducePreviewAfter'
  },
  mhgm: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'betaReducePreviewCrossed'
  },
  osqo: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E1,
    isDone: true
  },
  sgfj: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E2,
    initialState: 'showFuncBound',
    finalState: 'betaReducePreviewBefore'
  },
  gwtp: {
    runner: 'singleStep',
    hideFuncUnboundBadgeOnExplanation: true,
    expressionContainer: lessonExpressions.e1E2,
    initialState: 'betaReducePreviewBefore',
    finalState: 'betaReducePreviewCrossed'
  },
  jwzh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E2,
    initialState: 'betaReducePreviewBefore'
  },
  knhw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E2,
    initialState: 'betaReducePreviewCrossed'
  },
  ahsd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e1E2,
    isDone: true
  },
  wunw: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E1,
    initialState: 'active',
    skipToTheEnd: false
  },
  jbam: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e1E2,
    initialState: 'active',
    skipToTheEnd: false
  },
  xwim: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e2E1
  },
  awxz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e2E1,
    isDone: true
  },
  ldts: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e2E1
  },
  rmsd: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e2E1,
    initialState: 'active',
    finalState: 'showFuncUnbound'
  },
  jmqh: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e2E1,
    initialState: 'showFuncUnbound',
    skipToTheEnd: false
  },
  qwke: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e2E1,
    initialState: 'showFuncUnbound'
  },
  cvtc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true
  },
  uemm: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true,
    isDone: true
  },
  xhbi: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true
  },
  dkiy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E2,
    showPriorities: true
  },
  owcy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E3
  },
  aaov: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e3E1,
    initialState: 'default',
    finalState: 'active',
    showPriorities: true
  },
  qxgl: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true,
    initialState: 'active',
    lastAllowedExpressionState: 'betaReducePreviewCrossed',
    skipToTheEnd: false
  },
  uwma: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e3E1,
    initialState: 'betaReducePreviewCrossed',
    finalState: 'default',
    showPriorities: true
  },
  kvso: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E1,
    nextIteration: true,
    showPriorities: true,
    skipToTheEnd: false
  },
  snsr: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true,
    skipToTheEnd: false
  },
  udic: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E1,
    initialState: 'showFuncUnbound',
    showPriorities: true
  },
  xzqu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true,
    nextIteration: true
  },
  dnvw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E1,
    nextIteration: true,
    initialState: 'showFuncBound',
    showPriorities: true
  },
  nric: {
    runner: 'simple',
    isDone: true,
    expressionContainer: lessonExpressions.e3E1,
    showPriorities: true
  },
  hdxc: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E2,
    showPriorities: true,
    skipToTheEnd: false
  },
  eial: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E2,
    initialState: 'showFuncUnbound',
    showPriorities: true
  },
  iwkx: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E2,
    nextIteration: true,
    showPriorities: true
  },
  vjaa: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E2,
    initialState: 'showFuncBound',
    showPriorities: true,
    nextIteration: true
  },
  iifq: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E2,
    isDone: true,
    showPriorities: true
  },
  laea: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E1,
    showPriorities: true
  },
  cgpd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E1,
    isDone: true
  },
  ijot: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E1,
    showPriorities: true
  },
  aezk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'active',
    showPriorities: true
  },
  ainx: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'active',
    lastAllowedExpressionState: 'showFuncBound',
    showPriorities: true,
    showAllShowSteps: true,
    skipToTheEnd: false,
    explanationsVisibility: 'hiddenInitialAndLastPausedOnly'
  },
  hykj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'showFuncUnbound',
    showPriorities: true
  },
  ielw: {
    runner: 'simple',
    showAllShowSteps: true,
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'showFuncUnbound',
    showPriorities: true
  },
  dtzu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'betaReducePreviewBefore',
    showPriorities: true,
    explanationsVisibility: 'visible'
  },
  efyy: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'betaReducePreviewBefore',
    finalState: 'betaReducePreviewAfter',
    showPriorities: true
  },
  izgz: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E1,
    initialState: 'betaReducePreviewAfter',
    showPriorities: true,
    skipToTheEnd: false
  },
  ljjg: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E5
  },
  ebag: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E5,
    isDone: true
  },
  skzv: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E5
  },
  egmr: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'active',
    finalState: 'showFuncBound',
    hideFuncUnboundBadgeOnExplanation: true
  },
  lygz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'betaReducePreviewBefore',
    explanationsVisibility: 'visible'
  },
  fivy: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'betaReducePreviewBefore',
    finalState: 'betaReducePreviewAfter'
  },
  dmwy: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'betaReducePreviewAfter',
    skipToTheEnd: false
  },
  fpsd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'showFuncBound'
  },
  vegw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e3E5,
    initialState: 'betaReducePreviewAfter'
  },
  zywk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    showPriorities: true,
    initialState: 'default'
  },
  pqfs: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    showPriorities: true,
    initialState: 'active'
  },
  tntc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    initialState: 'active',
    showPriorities: true
  },
  mbrh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    showPriorities: true,
    isDone: true
  },
  wbru: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E2,
    showPriorities: true
  },
  hwtu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    initialState: 'showCallArg',
    showAllShowSteps: true,
    showPriorities: true
  },
  usta: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E2,
    initialState: 'showCallArg',
    skipToTheEnd: false,
    showAllShowSteps: true,
    showPriorities: true
  },
  mpal: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E2,
    initialState: 'showFuncBound',
    showPriorities: true
  },
  gtdu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E3,
    showPriorities: true
  },
  jmmp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E3,
    showPriorities: true,
    highlightOverrides: { b: 'highlighted' }
  },
  qpkm: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E3,
    showPriorities: true,
    isDone: true
  },
  udvh: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E3,
    showPriorities: true
  },
  dqey: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e5E3,
    initialState: 'active',
    showPriorities: true
  },
  diis: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e5E3,
    initialState: 'active',
    skipToTheEnd: false,
    showPriorities: true
  },
  tiok: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E1,
    showPriorities: true,
    caption: { name: 'secretCodeCaptionSimple', number: 0 }
  },
  tfho: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E2,
    showPriorities: true,
    caption: { name: 'secretCodeCaptionSimple', number: 1 }
  },
  idcf: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E3,
    showPriorities: true,
    caption: { name: 'secretCodeCaptionSimple', number: 2 }
  },
  xemt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E4,
    showPriorities: true
  },
  howy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E12,
    showPriorities: true,
    variableSize: 'md'
  },
  imqy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E13,
    showPriorities: true,
    variableSize: 'md',
    caption: { name: 'secretCodeCaption', number: 5, letter: 'i' },
    bottomRightBadgeOverrides: { j: '🅱️', i: '🅰️' }
  },
  bpwl: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E4,
    showPriorities: true,
    caption: { name: 'secretCodeCaptionSimple', number: 3 }
  },
  eozk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E5
  },
  stio: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E5,
    highlightOverrides: { Amult: 'highlighted' },
    caption: { name: 'numberOfAIsSecretCodeCaption' }
  },
  cqpa: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E6,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'A' }
  },
  blre: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E1,
    showPriorities: true,
    bottomRightBadgeOverrides: { b: '🅱️', a: '🅰️' }
  },
  jmyv: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E2,
    showPriorities: true,
    bottomRightBadgeOverrides: { d: '🅱️', c: '🅰️' }
  },
  ilnb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E3,
    showPriorities: true,
    bottomRightBadgeOverrides: { f: '🅱️', e: '🅰️' }
  },
  qvxe: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E11,
    showPriorities: true,
    bottomRightBadgeOverrides: { f: '🅱️', e: '🅰️' },
    caption: { name: 'secretCodeCaption', number: 2, letter: 'e' }
  },
  qsfp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E4,
    showPriorities: true,
    bottomRightBadgeOverrides: { h: '🅱️', g: '🅰️' }
  },
  sfop: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E10,
    showPriorities: true,
    bottomRightBadgeOverrides: { h: '🅱️', g: '🅰️' },
    caption: { name: 'secretCodeCaption', number: 3, letter: 'g' }
  },
  xpvh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E1,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 0, letter: 'a' },
    bottomRightBadgeOverrides: { b: '🅱️', a: '🅰️' }
  },
  nicg: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E8,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 0, letter: 'd' }
  },
  qmof: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  xgei: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeAddOneCaption' }
  },
  mauj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { d: 'highlighted', e: 'highlighted' }
  },
  eavp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  wafy: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e6E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 1.75
  },
  badn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e6E9,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'b' }
  },
  slyk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E1,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'd' }
  },
  eemn: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e7E2,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 3,
    highlightOverrides: { d: 'highlighted', e: 'highlighted' }
  },
  rceu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E2,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'b' }
  },
  sisn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E3,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'd' }
  },
  syhh: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e7E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    highlightOverrides: { d: 'highlighted', e: 'highlighted' },
    speed: 3
  },
  ablz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E4,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 3, letter: 'b' }
  },
  bpza: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E5,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'e' }
  },
  vrvl: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E6,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'g' }
  },
  goif: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  fatm: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E11,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    highlightOverrides: { g: 'highlighted', h: 'highlighted' }
  },
  bxdf: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E7,
    showPriorities: true,
    caption: { name: 'secretCodeAddCaption' },
    containerSize: 'xs',
    variableSize: 'md'
  },
  hdwy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    highlightOverrides: { g: 'highlighted', h: 'highlighted' }
  },
  entr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm'
  },
  brrh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E10,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    highlightOverrides: { e: 'highlighted', f: 'highlighted' }
  },
  rome: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e7E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    skipToTheEnd: false,
    speed: 5
  },
  dhdk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E8,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 3, letter: 'c' }
  },
  dyov: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    highlightOverrides: { e: 'highlighted', f: 'highlighted' }
  },
  unck: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e7E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    skipToTheEnd: false,
    speed: 5
  },
  cpbj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e7E9,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 4, letter: 'c' }
  },
  ksya: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  drvu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeMultiplyCaption' }
  },
  bdlj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E2,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'e' }
  },
  ifwb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E3,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 3, letter: 'g' }
  },
  mame: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: {
      e: 'highlighted',
      f: 'highlighted',
      g: 'highlighted',
      h: 'highlighted'
    }
  },
  ngus: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e8E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    skipToTheEnd: false,
    speed: 5,
    highlightOverrides: {
      e: 'highlighted',
      f: 'highlighted',
      g: 'highlighted',
      h: 'highlighted'
    }
  },
  pzwe: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm'
  },
  ujfj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E4,
    showPriorities: true,
    isDone: true,
    variableSize: 'md',
    caption: { name: 'secretCodeCaption', number: 6, letter: 'c' }
  },
  dymt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E5,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'e' }
  },
  mhwq: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E6,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'g' }
  },
  sojz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: {
      e: 'highlighted',
      f: 'highlighted',
      g: 'highlighted',
      h: 'highlighted'
    }
  },
  ktyt: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e8E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 5
  },
  aeyv: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e8E7,
    showPriorities: true,
    isDone: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'c' }
  },
  bxfv: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { z: 'highlighted', y: 'highlighted' }
  },
  fqwj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  tkqr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E2,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { f: 'highlighted', g: 'highlighted' }
  },
  fhlw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E3,
    caption: { name: 'secretCodeCaption', number: 0, letter: 'f' }
  },
  jliw: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e9E2,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 3
  },
  yehl: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E4,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'f' }
  },
  mrky: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { f: 'highlighted', g: 'highlighted' }
  },
  ctyl: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e9E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 4
  },
  kupy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E6,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'f' }
  },
  qdkf: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { f: 'highlighted', g: 'highlighted' }
  },
  gtwk: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e9E7,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 4,
    skipAlphaConvert: true
  },
  nlxe: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: 'z' }
  },
  dvrw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e9E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: ['w', 'x'] },
    highlightOverrides: { w: 'highlighted', x: 'highlighted' }
  },
  wbpx: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e10E1,
    showPriorities: true
  },
  gszp: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E2,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 1.75,
    highlightOverrides: { c: 'highlighted' }
  },
  kntz: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E3,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 1.75,
    highlightOverrides: { d: 'highlighted' }
  },
  bmms: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E4,
    showPriorities: true,
    skipAlphaConvert: true,
    speed: 1.75,
    skipToTheEnd: false
  },
  gmcn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e10E4,
    showPriorities: true,
    skipAlphaConvert: true,
    initialState: 'showFuncUnbound',
    highlightOverrides: { b: 'highlighted' },
    caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true },
    highlightOverrideActiveAfterStart: true
  },
  vpjw: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E4,
    explanationsVisibility: 'hiddenInitialAndLastPausedOnly',
    skipAlphaConvert: true,
    showPriorities: true,
    initialState: 'showFuncUnbound',
    lastAllowedExpressionState: 'showFuncBound',
    highlightOverrides: { b: 'highlighted' },
    skipToTheEnd: false,
    speed: 1.75
  },
  kjyi: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E4,
    skipAlphaConvert: true,
    showPriorities: true,
    nextIteration: true,
    initialState: 'showFuncBound',
    skipToTheEnd: false,
    speed: 1.75
  },
  dpst: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e10E2,
    showPriorities: true,
    skipAlphaConvert: true,
    initialState: 'showFuncUnbound',
    caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }
  },
  xhwx: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E2,
    skipAlphaConvert: true,
    showPriorities: true,
    initialState: 'showFuncUnbound',
    lastAllowedExpressionState: 'showFuncBound',
    skipToTheEnd: false,
    speed: 1.75
  },
  ttvy: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e10E2,
    skipAlphaConvert: true,
    showPriorities: true,
    nextIteration: true,
    initialState: 'showFuncBound',
    skipToTheEnd: false,
    speed: 1.75
  },
  lrja: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E1,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 1, letter: 'd' }
  },
  bcae: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    skipAlphaConvert: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  zuam: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    skipToTheEnd: false,
    skipAlphaConvert: true,
    speed: 3,
    containerSize: 'xs',
    variableSize: 'md'
  },
  kfcw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    isDone: true,
    skipAlphaConvert: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'notSecretCodeCaption', number: 2, letter: 'b' }
  },
  jxyg: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    initialState: 'showFuncUnbound',
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { b: 'highlighted' },
    highlightOverridesCallArgAndFuncUnboundOnly: true,
    highlightOverrideActiveAfterStart: true,
    caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }
  },
  oiwu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E3,
    showPriorities: true,
    initialState: 'showFuncUnbound',
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { b: 'highlighted' },
    highlightOverrideActiveAfterStart: true,
    showOnlyFocused: true,
    caption: { name: 'mustChangeBothFuncUnboundAndBound' }
  },
  uqpp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E3,
    showPriorities: true,
    initialState: 'alphaConvertDone',
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { b: 'highlighted' },
    highlightOverrideActiveAfterStart: true,
    showOnlyFocused: true
  },
  hxmk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E3,
    showPriorities: true,
    initialState: 'alphaConvertDone',
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { b: 'highlighted' },
    highlightOverrideActiveAfterStart: true,
    caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }
  },
  rzbq: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e11E3,
    showPriorities: true,
    initialState: 'alphaConvertDone',
    containerSize: 'xs',
    variableSize: 'md',
    skipToTheEnd: false,
    speed: 3
  },
  jlet: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E3,
    isDone: true,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeCaption', number: 2, letter: 'e' }
  },
  kqip: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    initialState: 'needsAlphaConvert',
    containerSize: 'xs',
    variableSize: 'md',
    explanationsVisibility: 'visible'
  },
  tkbr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e11E2,
    showPriorities: true,
    initialState: 'alphaConvertDone',
    containerSize: 'xs',
    variableSize: 'md',
    explanationsVisibility: 'visible'
  },
  gopk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  imgp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E2,
    showPriorities: true,
    caption: { name: 'secretCodeCaption', number: 2, letter: 'g' }
  },
  lxnu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E3,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  ccon: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e12E3,
    showPriorities: true,
    skipToTheEnd: false,
    containerSize: 'xs',
    variableSize: 'sm',
    speed: 5
  },
  npfx: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E3,
    isDone: true,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeCaption', number: 1, letter: 'b' }
  },
  pnob: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E1,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeMinusOneCaption' }
  },
  rqdn: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e12E3,
    showPriorities: true,
    explanationsVisibility: 'hiddenInitialPausedOnly',
    lastAllowedExpressionState: 'needsAlphaConvert',
    containerSize: 'xs',
    variableSize: 'md',
    speed: 5,
    skipToTheEnd: false
  },
  fiab: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e12E4,
    showPriorities: true,
    explanationsVisibility: 'hiddenInitialPausedOnly',
    lastAllowedExpressionState: 'needsAlphaConvert',
    containerSize: 'xs',
    variableSize: 'md',
    speed: 5,
    skipToTheEnd: false
  },
  plxd: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e12E3,
    showPriorities: true,
    explanationsVisibility: 'visible',
    initialState: 'needsAlphaConvert',
    finalState: 'alphaConvertDone',
    containerSize: 'xs',
    variableSize: 'md'
  },
  zaoc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeTwoMinusOneCaption' }
  },
  xekr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E5
  },
  lial: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E6,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeTwoMinusOneCaption' }
  },
  uqts: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E6,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  ojma: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E7
  },
  yykk: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e12E7
  },
  exww: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  qgun: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: { g: 'highlighted', h: 'highlighted' },
    caption: { name: 'secretCodeCaption', number: 1, letter: 'g' }
  },
  yvia: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  qifg: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E10,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  ssns: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E10,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: {
      a: 'highlighted',
      b: 'highlighted',
      c: 'highlighted',
      d: 'highlighted',
      e: 'highlighted',
      f: 'highlighted'
    }
  },
  tboe: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E13,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    highlightOverrides: {
      a: 'highlighted',
      b: 'highlighted',
      c: 'highlighted',
      d: 'highlighted',
      e: 'highlighted',
      f: 'highlighted'
    }
  },
  ufyc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e12E11,
    showPriorities: true
  },
  pbgd: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e12E12,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 1.75
  },
  hvdn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E1,
    caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: 'z' }
  },
  vxnm: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E2
  },
  xefx: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E2,
    skipToTheEnd: false
  },
  wcsz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E2,
    explanationsVisibility: 'visible',
    initialState: 'conditionActive'
  },
  psqo: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E2,
    explanationsVisibility: 'visible',
    initialState: 'falseCaseActive'
  },
  xsby: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E2,
    isDone: true
  },
  repd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E3,
    showPriorities: true
  },
  cnoq: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E3,
    skipToTheEnd: false,
    showPriorities: true,
    speed: 1.75
  },
  dwnj: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E3,
    skipToTheEnd: false,
    showPriorities: true,
    lastAllowedExpressionState: 'default'
  },
  guuf: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E3,
    showPriorities: true,
    explanationsVisibility: 'visible',
    nextIteration: true,
    initialState: 'conditionActive'
  },
  lrrr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E3,
    showPriorities: true,
    nextIteration: true,
    explanationsVisibility: 'visible',
    initialState: 'trueCaseActive'
  },
  dpar: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E3,
    showPriorities: true,
    speed: 1.75,
    skipToTheEnd: false,
    nextIteration: true,
    explanationsVisibility: 'visible',
    initialState: 'trueCaseOnly'
  },
  ylil: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  vqcw: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md'
  },
  dcfi: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E6,
    showPriorities: true,
    skipToTheEnd: false,
    containerSize: 'xs',
    variableSize: 'md',
    speed: 5
  },
  bmnc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E6,
    isDone: true,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'secretCodeCaption', number: 2, letter: 'l' }
  },
  ufze: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E3,
    showPriorities: true,
    isDone: true
  },
  rreb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E7,
    caption: { name: 'whatCanComputeFactorial', start: 3 }
  },
  kqzn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E8,
    caption: { name: 'whatCanComputeFactorial', start: 4 }
  },
  aimh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E12,
    caption: { name: 'whatCanComputeFactorial', start: 5 }
  },
  lyod: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E9,
    caption: { name: 'secretCodeMultiplyCaption' }
  },
  imba: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E10,
    caption: { name: 'secretCodeMultiplyCaption' }
  },
  zifr: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e13E11
  },
  omlc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e13E11,
    caption: { name: 'secretCodeMultiplyCaption', arg1: 2, arg2: 3 }
  },
  zxux: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    variableSize: 'md'
  },
  itzl: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    initialState: 'active',
    finalState: 'magicalExpanded',
    variableSize: 'md'
  },
  gtnr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIteration: true,
    highlightOverrideActiveAfterStart: true,
    highlightOverrides: { magical: 'highlighted' },
    variableSize: 'md',
    caption: { name: 'witchAppearsAgainCaption' }
  },
  cfms: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E6,
    showPriorities: true,
    nextIteration: true,
    highlightOverrideActiveAfterStart: true,
    highlightOverrides: { magical: 'highlighted' },
    variableSize: 'md',
    caption: { name: 'witchAppearsAgainCaption' }
  },
  syfp: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIteration: true,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 1,
    variableSize: 'md'
  },
  wdol: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 2,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 2,
    variableSize: 'md',
    highlightNumber: 2
  },
  luir: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 3,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 3,
    variableSize: 'md'
  },
  ifxr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 4,
    initialState: 'default',
    variableSize: 'md',
    caption: { name: 'magicalChangedCaption', fromNumber: 3 },
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [1, 2]
  },
  vkpm: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 4,
    variableSize: 'sm',
    initialState: 'active',
    finalState: 'magicalExpanded'
  },
  mihy: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 4,
    skipToTheEnd: false,
    initialState: 'magicalExpanded',
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 7,
    speed: 1.75,
    variableSize: 'sm'
  },
  dxum: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 4,
    variableSize: 'sm'
  },
  davn: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    initialState: 'default',
    nextIterations: 8,
    caption: { name: 'magicalChangedCaption', fromNumber: 2 },
    variableSize: 'sm',
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [3, 4]
  },
  qltx: {
    runner: 'singleStep',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 8,
    initialState: 'active',
    finalState: 'magicalExpanded',
    variableSize: 'sm'
  },
  zvet: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 8,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'conditionActive',
    lastAllowedExpressionStateAfterIterations: 8,
    initialState: 'magicalExpanded',
    speed: 1.75,
    variableSize: 'sm'
  },
  yvty: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 8,
    explanationsVisibility: 'visible',
    initialState: 'conditionActive',
    variableSize: 'sm'
  },
  umce: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 8,
    initialState: 'trueCaseActive',
    explanationsVisibility: 'visible',
    variableSize: 'sm'
  },
  orhx: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 12,
    variableSize: 'sm',
    skipToTheEnd: false,
    speed: 1.75
  },
  wqdb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 12,
    variableSize: 'sm'
  },
  xtjt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    isDone: true,
    showPriorities: true,
    variableSize: 'sm'
  },
  mnfh: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 5,
    variableSize: 'sm'
  },
  yklt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E2,
    showPriorities: true,
    variableSize: 'sm'
  },
  fsmk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E2,
    showPriorities: true,
    nextIterations: 16,
    variableSize: 'sm'
  },
  peoq: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E2,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 5,
    variableSize: 'xs',
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 15
  },
  nfkp: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e14E2,
    showPriorities: true,
    skipToTheEnd: false,
    speed: 1.75,
    nextIterations: 16,
    variableSize: 'sm'
  },
  fora: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E3,
    showPriorities: true,
    variableSize: 'sm'
  },
  eobj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E3,
    showPriorities: true,
    variableSize: 'sm',
    nextIterations: 20
  },
  osqg: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E3,
    showPriorities: true,
    variableSize: 'sm',
    isDone: true
  },
  vrwt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    variableSize: 'md'
  },
  lodr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E2,
    variableSize: 'md'
  },
  fjyk: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E3,
    variableSize: 'md'
  },
  miez: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E4,
    variableSize: 'md'
  },
  fapu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E5,
    variableSize: 'sm'
  },
  xjae: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E6,
    variableSize: 'md'
  },
  xsve: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E6,
    variableSize: 'md',
    explanationsVisibility: 'visible',
    initialState: 'magicalExpanded'
  },
  igrt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    variableSize: 'sm'
  },
  woft: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 12,
    variableSize: 'sm'
  },
  urhc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    variableSize: 'sm',
    isDone: true
  },
  tdau: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E1,
    showPriorities: true,
    highlightOverrides: { s: 'highlighted' },
    variableSize: 'md',
    caption: { name: 'witchReplacedCaption' }
  },
  lkwr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E2,
    showPriorities: true,
    highlightOverrides: { s: 'highlighted' },
    variableSize: 'md',
    containerSize: 'xs'
  },
  osih: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E3,
    showPriorities: true,
    highlightOverrides: { a: 'highlighted', b: 'highlighted' },
    variableSize: 'xs',
    containerSize: 'xs'
  },
  dkbt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E3,
    showPriorities: true,
    variableSize: 'xs',
    containerSize: 'xs'
  },
  hzlj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E4,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs'
  },
  plts: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    skipToTheEnd: false,
    containerSize: 'xs',
    variableSize: 'xxs',
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 5,
    speed: 4
  },
  pnux: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    highlightFunctions: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 6
  },
  zhby: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E6,
    showPriorities: true,
    variableSize: 'md',
    highlightOverrides: { abbreviated: 'highlighted' },
    highlightOverrideActiveAfterStart: true
  },
  xcnu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E6,
    showPriorities: true,
    variableSize: 'md',
    caption: { name: 'ycChangedCaption', fromNumber: 3 },
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [1, 2]
  },
  iisx: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 4,
    initialState: 'default',
    variableSize: 'md',
    caption: { name: 'magicalChangedCaption', fromNumber: 3 },
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [1, 2]
  },
  pzui: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 6,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 10,
    speed: 4
  },
  kfrt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 11,
    highlightFunctions: true
  },
  iygh: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E7,
    showPriorities: true,
    variableSize: 'md',
    highlightOverrides: { abbreviated: 'highlighted' },
    highlightOverrideActiveAfterStart: true
  },
  ines: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E7,
    showPriorities: true,
    variableSize: 'md',
    caption: { name: 'ycChangedCaption', fromNumber: 2 },
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [3, 4]
  },
  gcnt: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e14E1,
    showPriorities: true,
    nextIterations: 8,
    initialState: 'default',
    variableSize: 'md',
    caption: { name: 'magicalChangedCaption', fromNumber: 2 },
    argPriorityAggHighlights: [1],
    funcPriorityAggHighlights: [3, 4]
  },
  pgtx: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 11,
    skipToTheEnd: false,
    lastAllowedExpressionState: 'conditionActive',
    lastAllowedExpressionStateAfterIterations: 14,
    speed: 4
  },
  gswd: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 14,
    skipToTheEnd: false,
    initialState: 'conditionActive',
    lastAllowedExpressionState: 'default',
    lastAllowedExpressionStateAfterIterations: 15
  },
  jruw: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    nextIterations: 16,
    skipToTheEnd: false,
    speed: 1.75
  },
  nnhc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    variableSize: 'xs',
    containerSize: 'xs'
  },
  pzvr: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    variableSize: 'xs',
    containerSize: 'xs',
    nextIterations: 16
  },
  mscz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E5,
    showPriorities: true,
    variableSize: 'xs',
    containerSize: 'xs',
    isDone: true
  },
  jreq: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    lastAllowedExpressionState: 'default',
    skipToTheEnd: false,
    speed: 5,
    lastAllowedExpressionStateAfterIterations: 20,
    superFastForward: true
  },
  vpmj: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    nextIterations: 21
  },
  uitu: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E8,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    isDone: true
  },
  bozr: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    lastAllowedExpressionState: 'default',
    skipToTheEnd: false,
    speed: 5,
    lastAllowedExpressionStateAfterIterations: 25,
    superFastForward: true
  },
  angp: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    nextIterations: 26
  },
  wxqy: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E9,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    isDone: true
  },
  wcwd: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E10,
    showPriorities: true,
    variableSize: 'xs',
    containerSize: 'xs'
  },
  bcgc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E11,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs'
  },
  szou: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E12,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    caption: { name: 'changedToPowerCaption' }
  },
  ysji: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E12,
    isDone: true
  },
  ilrn: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E12,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    lastAllowedExpressionState: 'default',
    skipToTheEnd: false,
    speed: 5,
    lastAllowedExpressionStateAfterIterations: 15,
    superFastForward: true
  },
  xsgz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E12,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    nextIterations: 16
  },
  dret: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E12,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    isDone: true
  },
  bpsz: {
    runner: 'playButtonOnly',
    expressionContainer: lessonExpressions.e15E13,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xxs',
    lastAllowedExpressionState: 'default',
    skipToTheEnd: false,
    speed: 5,
    lastAllowedExpressionStateAfterIterations: 20,
    superFastForward: true
  },
  fotb: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E13,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    nextIterations: 21
  },
  zfcz: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E13,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs',
    isDone: true
  },
  jtai: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E14,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'xs'
  },
  nmoc: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E15,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm'
  },
  cnef: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E15,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'sm',
    highlightOverrides: { a: 'highlighted', b: 'highlighted' }
  },
  news: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E16,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'thisIsYCombinatorCaption' }
  },
  xrzv: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e15E17,
    showPriorities: true,
    containerSize: 'xs',
    variableSize: 'md',
    caption: { name: 'thisIsYCombinatorCaption', too: true }
  },
  ytcf: {
    runner: 'simple',
    expressionContainer: lessonExpressions.e16E1
  }
}

export default config
