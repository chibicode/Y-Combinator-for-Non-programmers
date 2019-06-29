import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { episodeTitles } from 'src/lib/titles'
import { cakeVariableName } from 'src/lib/specialVariableNames'
import contentVersion from 'src/lib/contentVersion'

const episodeEmojis: Record<keyof typeof episodeTitles | 0, string[]> =
  contentVersion === 'v2'
    ? {
        0: ['🤖', '🤔', '🧙‍♀️'],
        1: ['🔢', '😍', '🎁'],
        2: ['2️⃣', '😚', '🗓'],
        3: ['4️⃣', '😋', '🍱'],
        4: ['🍱', '🤤', '3️⃣'],
        5: ['🥇', '😬', '🥈'],
        6: ['🅰️', '🧐', '️🅱️'],
        7: ['➕', '🤨', '️🍱'],
        8: ['🍱', '😵', '✖️'],
        9: [letterEmojiMapping['z'], '😏', letterEmojiMapping['y']],
        10: [
          letterEmojiMapping[cakeVariableName],
          '🥳',
          letterEmojiMapping[cakeVariableName]
        ],
        11: [letterEmojiMapping['b'], '😎', letterEmojiMapping['e']],
        12: ['➖', '🤯', '️1️⃣'],
        13: ['✖️', '🥴', '↕️'],
        14: ['🧙‍♀️', '😨', '🧙‍♀️'],
        15: [letterEmojiMapping['a'], '🤩', letterEmojiMapping['b']],
        16: ['️🤖', '🤗', '️🤖']
      }
    : {
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
        10: [
          letterEmojiMapping[cakeVariableName],
          '🥳',
          letterEmojiMapping[cakeVariableName]
        ],
        11: [letterEmojiMapping['b'], '😎', letterEmojiMapping['e']],
        12: ['➖', '🤯', '️1️⃣'],
        13: ['✖️', '🥴', '↕️'],
        14: ['🧙‍♀️', '😨', '🧙‍♀️'],
        15: [letterEmojiMapping['a'], '🤩', letterEmojiMapping['b']],
        16: ['️🤖', '🤗', '️🤖']
      }

export default episodeEmojis
