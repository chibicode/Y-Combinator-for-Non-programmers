import jsonMapping from 'src/lib/numberEmojiMappingJson.json'

const numberEmojiMapping: Record<number, string> = jsonMapping

export const numberEmojiMappingMultipleDigits: Record<number, string[]> = {
  24: ['2️⃣', '4️⃣'],
  16: ['1️⃣', '6️⃣'],
  28: ['2️⃣', '8️⃣'],
  29: ['2️⃣', '9️⃣'],
  120: ['1️⃣', '2️⃣', '0️⃣'],
  2019: ['2️⃣', '0️⃣', '1️⃣', '9️⃣'],
  2020: ['2️⃣', '0️⃣', '2️⃣', '0️⃣']
}

export default numberEmojiMapping
