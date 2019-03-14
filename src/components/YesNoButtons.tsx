/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext, useState } from 'react'
import CardContext from 'src/components/CardContext'
import { Em, P } from 'src/components/ContentTags'
import h from 'src/lib/h'
import locale from 'src/lib/locale'
import { colors, lineHeights, radii, spaces } from 'src/lib/theme'
export const jsxBabelFix = jsx

type YesNoButtonsSelection = 'default' | 'yes' | 'no'

interface YesNoButtonsProps {
  answer: 'yes' | 'no'
}

interface ButtonProps {
  status: 'default' | 'active' | 'inactive'
  children: React.ReactNode
  onClick: React.MouseEventHandler
}

const Button = ({ status, children, onClick }: ButtonProps) => (
  <button
    disabled={status !== 'default'}
    onClick={onClick}
    css={css`
      cursor: ${status === 'default' ? 'pointer' : 'default'};
      padding: ${spaces(0.75)} ${spaces(1)};
      border-radius: ${radii(0.5)};
      margin: 0 ${spaces(0.5)};
      border: 2px solid ${colors('grey700')};
      font-weight: bold;
      opacity: ${status === 'inactive' ? 0.5 : 1};
      background: ${status === 'active'
        ? colors('yellow100')
        : colors('white')};
      color: ${colors('grey800')};
      text-decoration: none;
      line-height: ${lineHeights(1)};
      -webkit-user-select: none;
      box-shadow: ${status === 'active'
        ? `inset 0 0 0 1px ${colors('grey700')}`
        : 'none'};

      &:focus {
        box-shadow: inset 0 0 0 1px ${colors('grey700')};
        outline: none;
      }

      &:hover,
      &:active {
        background-color: ${status === 'default'
          ? colors('yellow100')
          : status === 'active'
          ? colors('yellow100')
          : colors('white')};
      }
    `}
  >
    {children}
  </button>
)

const YesNoButtons = ({ answer }: YesNoButtonsProps) => {
  const [selection, setSelection] = useState<YesNoButtonsSelection>('default')
  const { updateColor } = useContext(CardContext)
  const isCorrect = selection === answer
  const onButtonClick = (
    actual: YesNoButtonsProps['answer'],
    expected: YesNoButtonsProps['answer']
  ) => {
    return () => {
      if (selection === 'default') {
        setSelection(actual)
      }
      if (updateColor) {
        if (actual === expected) {
          updateColor('green')
        } else {
          updateColor('orange')
        }
      }
    }
  }
  return (
    <>
      <div
        css={css`
          text-align: center;
          margin: ${spaces(2.5)} 0
            ${selection === 'default' ? spaces(1.5) : spaces(1)};
        `}
      >
        <Button
          status={
            selection === 'default'
              ? 'default'
              : selection === 'yes'
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('yes', answer)}
        >
          {h('yesNoQuizYes')}
        </Button>
        <Button
          status={
            selection === 'default'
              ? 'default'
              : selection === 'no'
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('no', answer)}
        >
          {h('yesNoQuizNo')}
        </Button>
      </div>
      {selection !== 'default' && (
        <>
          <P
            css={css`
              text-align: center;
            `}
          >
            <Em>
              <strong>
                {isCorrect ? h('yesNoQuizCorrect') : h('yesNoQuizIncorrect')}
              </strong>
              {locale === 'en' && ' '}
              {isCorrect
                ? h('yesNoQuizCorrectPostfix')
                : h('yesNoQuizIncorrectPostfix', answer === 'yes')}
            </Em>
          </P>
          <P
            css={css`
              text-align: center;
            `}
          >
            ↓{' '}
            {locale === 'en'
              ? 'Please continue below!'
              : 'そのまま読み進めてみてください!'}
          </P>
        </>
      )}
    </>
  )
}

export default YesNoButtons
