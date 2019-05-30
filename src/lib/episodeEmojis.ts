import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { episodeTitles } from 'src/lib/titles'

const episodeEmojis: Record<keyof typeof episodeTitles | 0, string[]> = {
  0: ['🤖', '🤔', '🧙‍♀️'],
  1: ['🍱', '😍', '🍱'],
  2: ['✅', '🤫', '💥'],
  3: ['4️⃣', '😋', '🍱'],
  4: ['🍱', '🤤', '3️⃣'],
  5: ['🥇', '😬', '🥈'],
  6: ['🅰️', '🧐', '️🅱️'],
  7: ['➕', '🤨', '️🍱'],
  8: ['🍱', '😵', '✖️'],
  9: [letterEmojiMapping['z'], '😏', letterEmojiMapping['y']],
  10: ['♾', '🤪', '♾'],
  11: [letterEmojiMapping['v'], '🥳', letterEmojiMapping['v']],
  12: [letterEmojiMapping['b'], '😎', letterEmojiMapping['e']],
  13: ['➖', '🤯', '️1️⃣'],
  14: ['0️⃣', '🥴', '️🔢'],
  15: ['✨', '🤩', '🧙‍♀️'],
  16: ['️🤖', '🤗', '️🤖']
}

export default episodeEmojis
