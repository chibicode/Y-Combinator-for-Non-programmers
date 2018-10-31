const twemoji = require('twemoji')
const uniq = require('lodash/uniq')

const allUsedEmojis = uniq([
  '🤔',
  '🙂',
  '😋',
  '🍽',
  '👨‍🍳',
  '👋',
  '🍣',
  '🥪',
  '🥗',
  '🥩',
  '🌮',
  '🍱',
  '❓',
  '🇯🇵',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '😉',
  '👍',
  '❤️',
  '😎',
  '🆚',
  '👔',
  '🤖',
  '🌏',
  '🤖',
  '👨‍🎤',
  '🇯🇵',
  '⬅️',
  '➡️',
  '⬜️',
  '✅',
  '🤗',
  '🤯',
  '🍔',
  '🥇',
  '🥈',
  '🥉',
  '➡️',
  '🍕',
  '🍛',
  '🌭',
  '🆕',
  '😭',
  '⬅️',
  '✨',
  '🧙‍♂️',
  '🍚',
  '🍝',
  '💥',
  '😡',
  '☑️',
  '🎉',
  '💭',
  '🥦',
  '🍟',
  '🍖',
  '🥟',
  '🥐',
  '🥞',
  '🧀',
  '🍇',
  '🍎',
  '🍒',
  '🍋',
  '🍌',
  '🍍',
  '🎂',
  '🍪',
  '🍦',
  '😝',
  '😈',
  '▶️',
  '↩️',
  '⏸',
  '⏩'
])

// Copied from Twemoji
const UFE0Fg = /\uFE0F/g
const U200D = String.fromCharCode(0x200d)
function grabTheRightIcon(rawText) {
  // if variant is present as \uFE0F
  return twemoji.convert.toCodePoint(
    rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, '') : rawText
  )
}

console.log(
  allUsedEmojis
    .map(x => `./node_modules/twemoji/2/svg/${grabTheRightIcon(x)}.svg`)
    .join(' ')
)
