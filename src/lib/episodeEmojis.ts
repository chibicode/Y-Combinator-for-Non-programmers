const episodeEmojis: {
  [lessonName in string]: { [lessonNumber in number | string]: string[] }
} = {
  yc: {
    index: ['🤔', '🤔', '🤔'],
    1: ['😋', '🍽', '👨‍🍳'],
    2: ['🍱', '🍱', '🍱'],
    3: ['⬅️', '✅', '➡️'],
    4: ['💭', '🤔', '💭'],
    5: ['🥇', '🤔', '🥈'],
    6: ['⬅️', '🤔', '️⬅️'],
    7: ['😈', '😈', '😈'],
    8: ['1️⃣', '2️⃣', '️1️⃣'],
    9: ['😡', '💥', '️😡'],
    10: ['😡', '💥', '️😡']
  }
}

export default episodeEmojis
