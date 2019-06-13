import jsonMapping from './numberEmojiMappingJson.json'

const numberEmojiMapping: Record<number, string> = jsonMapping

export const numberEmojiMappingMultipleDigits: Record<number, string[]> = {
  24: ['2️⃣', '4️⃣'],
  16: ['1️⃣', '6️⃣'],
  120: ['1️⃣', '2️⃣', '0️⃣']
}

export default numberEmojiMapping
