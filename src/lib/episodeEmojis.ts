import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'

const episodeEmojis: { [lessonNumber in number]: string[] } = {
  0: ['🤖', '🤔', '🧙‍♂️'],
  1: ['🍱', '😍', '🍱'],
  2: ['✅', '🤫', '💥'],
  3: ['4️⃣', '😋', '🍱'],
  4: ['🍱', '🤤', '3️⃣'],
  5: ['🥇', '😬', '🥈'],
  6: ['🅰️', '🧐', '️🅱️'],
  7: ['➕', '🤨', '️🍱'],
  8: ['🍱', '😵', '✖️'],
  9: [letterEmojiMapping['z'], '😏', letterEmojiMapping['y']],
  10: [letterEmojiMapping['v'], '🥳', letterEmojiMapping['v']],
  11: ['❓', '❓', '️❓']
}

export default episodeEmojis
