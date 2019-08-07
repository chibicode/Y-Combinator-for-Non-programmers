import twemoji from 'twemoji'
import letterEmojiMappingJson from 'src/lib/letterEmojiMappingJson.json'
import numberEmojiMappingJson from 'src/lib/numberEmojiMappingJson.json'

const letterEmojis = Object.values<string>(letterEmojiMappingJson)
const numberEmojis = Object.values<string>(numberEmojiMappingJson)

// NOTE: Disabling svgo because it's causing
// some emojis like 😍 to be rendered incorrectly.
const allUsedEmojis = [
  ...new Set([
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
    '💡',
    '🎁',
    '🗓',
    '😚',
    '⭐️',
    '🌲',
    '😩',
    '😈',
    '😱',
    '😢',
    '😠',
    '😮',
    '😁',
    '🐶',
    '😒'
  ])
]

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
