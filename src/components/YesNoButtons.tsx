/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from 'react'
import { Em, P } from 'src/components/ContentTags'
import h from 'src/lib/h'
import locale from 'src/lib/locale'
import { colors, lineHeights, radii, spaces } from 'src/lib/theme'
import { CardAction, CardActionResult } from 'src/components/CardWrapper'
import CardActionContext from 'src/components/CardActionContext'
export const jsxBabelFix = jsx

interface YesNoButtonsProps {
  answer: 'yes' | 'no'
}

interface ButtonProps {
  status: 'default' | 'active' | 'inactive'
  cardActionResult: CardActionResult
  cardActionTaken: CardAction
  children: React.ReactNode
  onClick: React.MouseEventHandler
}

const Button = ({
  cardActionResult,
  cardActionTaken,
  status,
  children,
  onClick
}: ButtonProps) => {
  const borderColor =
    cardActionTaken === 'skipped'
      ? colors('green400')
      : {
          correct: colors('green400'),
          default: colors('blue400'),
          incorrect: colors('deepOrange400')
        }[cardActionResult]
  return (
    <button
      disabled={status !== 'default'}
      onClick={onClick}
      css={css`
        cursor: ${status === 'default' ? 'pointer' : 'default'};
        padding: ${spaces(0.75)} ${spaces(1)};
        border-radius: ${radii(0.5)};
        margin: 0 ${spaces(0.5)};
        border: 2px solid ${borderColor};
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
          ? `inset 0 0 0 1px ${borderColor}`
          : 'none'};

        &:focus {
          box-shadow: inset 0 0 0 1px ${borderColor};
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
}

const YesNoButtons = ({ answer }: YesNoButtonsProps) => {
  const {
    cardActionTaken,
    cardActionResult,
    setCardActionResult,
    takeCardAction
  } = useContext(CardActionContext)
  const onButtonClick = (
    actual: YesNoButtonsProps['answer'],
    expected: YesNoButtonsProps['answer']
  ) => {
    return () => {
      if (actual === 'yes') {
        takeCardAction('yesSelected')
      } else {
        takeCardAction('noSelected')
      }
      if (actual === expected) {
        setCardActionResult('correct')
      } else {
        setCardActionResult('incorrect')
      }
    }
  }
  return (
    <>
      <div
        css={css`
          text-align: center;
          margin: ${spaces(2)} 0 ${spaces(1.5)};
        `}
      >
        <Button
          cardActionResult={cardActionResult}
          cardActionTaken={cardActionTaken}
          status={
            cardActionTaken === 'default'
              ? 'default'
              : cardActionTaken === 'yesSelected' ||
                (cardActionTaken === 'skipped' && answer === 'yes')
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('yes', answer)}
        >
          {h('yesNoQuizYes')}
        </Button>
        <Button
          cardActionTaken={cardActionTaken}
          cardActionResult={cardActionResult}
          status={
            cardActionTaken === 'default'
              ? 'default'
              : cardActionTaken === 'noSelected' ||
                (cardActionTaken === 'skipped' && answer === 'no')
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('no', answer)}
        >
          {h('yesNoQuizNo')}
        </Button>
      </div>
      {(cardActionResult !== 'default' || cardActionTaken === 'skipped') && (
        <>
          <P
            css={css`
              text-align: center;
            `}
          >
            <Em>
              <strong>
                {cardActionTaken === 'skipped'
                  ? h('yesNoQuizSkipped')
                  : cardActionResult === 'correct'
                  ? h('yesNoQuizCorrect')
                  : h('yesNoQuizIncorrect')}
              </strong>
              {locale === 'en' && ' '}
              {cardActionTaken === 'skipped'
                ? h('yesNoQuizSkippedPostfix', answer === 'yes')
                : cardActionResult === 'correct'
                ? h('yesNoQuizCorrectPostfix')
                : h('yesNoQuizIncorrectPostfix', answer === 'yes')}
            </Em>
          </P>
        </>
      )}
    </>
  )
}

export default YesNoButtons
