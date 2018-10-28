const episodeEmojis: {
  [lessonName in string]: { [lessonNumber in number]: string[] }
} = {
  yc: {
    1: ['😋', '🍽', '👨‍🍳'],
    2: ['🍱', '🍱', '🍱'],
    3: ['⏪', '✅', '⏩'],
    4: ['💭', '🤔', '💭'],
    5: ['🥇', '🤔', '🥈'],
    6: ['⬅️', '🤔', '️⬅️'],
    7: ['😝', '😝', '️😝'],
    8: ['😡', '💥', '️😡'],
    9: ['😡', '💥', '️😡'],
    10: ['😡', '💥', '️😡']
  }
}

export default episodeEmojis
