import { ShorthandFunctionNames } from 'src/types/yc/ShorthandFunctionNames'
import jsonMapping from './shorthandFunctionEmojiMapping.json'

const shorthandFunctionEmojiMapping: Record<
  ShorthandFunctionNames,
  string[]
> = jsonMapping

export default shorthandFunctionEmojiMapping
