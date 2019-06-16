import twemoji from 'twemoji'
import uniq from 'lodash/uniq'

const letterEmojis = Object.values<string>(
  require('../src/lib/letterEmojiMappingJson.json')
)
const numberEmojis = Object.values<string>(
  require('../src/lib/numberEmojiMappingJson.json')
)

// NOTE: Disabling svgo because it's causing
// some emojis like 😍 to be rendered incorrectly.
const allUsedEmojis = uniq<string>([
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
  '🧑',
  '📼',
  '🔠',
  '🐍',
  '💡'
])

// Copied from Twemoji
const UFE0Fg = /\uFE0F/g
const U200D = String.fromCharCode(0x200d)
function grabTheRightIcon(rawText: string) {
  // if variant is present as \uFE0F
  return twemoji.convert.toCodePoint(
    rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, '') : rawText
  )
}

console.log(
  allUsedEmojis
    .map((x: string) => `.twemoji_svg/${grabTheRightIcon(x)}.svg`)
    .join(' ')
)
