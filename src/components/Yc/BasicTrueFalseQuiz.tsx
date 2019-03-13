import React from 'react'
import { Em, P } from 'src/components/ContentTags'
import h from 'src/lib/h'
import locale from 'src/lib/locale'

const Quiz: React.FC<{
  prefix?: React.ReactNode
  quizzes: (() => JSX.Element)[]
}> = ({ prefix, quizzes }) => {
  let i = 0
  return (
    <>
      {locale === 'jp' ? (
        <P>
          {prefix}仮に、次の{h('ycBentoBox')}
          で、全てのステップを実行したとします。
        </P>
      ) : (
        <P>
          {prefix}Suppose we take all the steps on the following{' '}
          {h('ycBentoBox')}:
        </P>
      )}
      {quizzes[i++]()}
      {locale === 'jp' ? (
        <P>
          {h('ycTrueOrFalse')}で答えてみてください:{' '}
          <Em>
            最終的には、上の{h('ycBentoBox')}は以下のようになるでしょうか？
          </Em>
        </P>
      ) : (
        <P>{h('ycTrueOrFalse')}: Will it eventually become this?</P>
      )}
      {quizzes[i++]()}
    </>
  )
}

export default Quiz
