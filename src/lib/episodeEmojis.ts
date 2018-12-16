import locale from 'src/lib/locale'

const episodeEmojis: {
  [lessonName in string]: { [lessonNumber in number | string]: string[] }
} = {
  yc: {
    index: ['🤔', '🤔', '🤔'],
    1: ['🍱', '🍱', '🍱'],
    2: locale === 'jp' ? ['🀄️', '🀄️', '🀄️'] : ['Ⓜ', 'Ⓜ', 'Ⓜ'],
    3: ['😎', '😎', '😎'],
    4: ['🥇', '🥈', '🥉'],
    5: ['🥇', '🤔', '️🥈'],
    6: ['🥪', '🔀', '🍗'],
    7: ['🔢', '🧐', '️🔢'],
    8: ['🍱', '➕', '1️⃣'],
    9: ['➕', '🍱', '✖️'],
    10: ['🔵', '🧐', '️🔴'],
    11: ['❓', '↔️', '️❓']
  }
}

export default episodeEmojis
