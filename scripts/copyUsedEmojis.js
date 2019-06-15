const twemoji = require('twemoji')
const uniq = require('lodash/uniq')
const letterEmojis = Object.values(
  require('../src/lib/letterEmojiMappingJson.json')
)
const numberEmojis = Object.values(
  require('../src/lib/numberEmojiMappingJson.json')
)

// NOTE: Disabling svgo because it's causing
// some emojis like 😍 to be rendered incorrectly.
const allUsedEmojis = uniq([
  ...letterEmojis,
  ...numberEmojis,
  '🤔',
  '🙂',
  '🍱',
  '❓',
  '😉',
  '👍',
  '🏁',
  '😎',
  '🆚',
  '👔',
  '🤖',
  '👨🏻‍💻',
  '🇺🇸',
  '⬅️',
  '➡️',
  '✅',
  '❌',
  '🤗',
  '🥇',
  '🥈',
  '▶️',
  '↩️',
  '⏸',
  '🧐',
  '🔢',
  '➕',
  '⬇️',
  '✖️',
  '➗',
  '➖',
  '💻',
  '🆗',
  '📱',
  '👎',
  '⭕️',
  '😄',
  '😭',
  '🧙‍♀️',
  '📙',
  '📗',
  '📘',
  '📕',
  '📝',
  '💭',
  '😅',
  '😍',
  '🔽',
  '️🤫',
  '💥',
  '↘',
  '⏩',
  '🤤',
  '🙄',
  '😬',
  '🎉',
  '😋',
  '🆕',
  '⁉',
  '🤨',
  '😵',
  '🧓🏻',
  '💡',
  '😏',
  '🤯',
  '🎤',
  '🎶',
  '✨',
  '️️⚠️️',
  '🥳',
  '🔎',
  '🗺',
  '📷',
  '😴',
  '↕️',
  '🚦',
  '↔️',
  '🥴',
  '🤩',
  '⏬',
  '😨',
  '🆓',
  '🚅',
  '😡',
  '🔁',
  '🧮',
  '💪',
  '👩🏻',
  '🧑🏿',
  '👩🏽',
  '🧑'
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
  allUsedEmojis.map(x => `.twemoji_svg/${grabTheRightIcon(x)}.svg`).join(' ')
)
