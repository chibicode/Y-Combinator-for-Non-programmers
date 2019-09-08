/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from 'react'
import { Em, P } from 'src/components/ContentTags'
import H from 'src/components/H'
import locale from 'src/lib/locale'
import { fontSizes, colors, radii, spaces } from 'src/lib/theme'
import { CardActionResult } from 'src/components/CardWrapper'
import CardActionContext from 'src/components/CardActionContext'

interface YesNoButtonsProps {
  answer: 'yes' | 'no'
}

interface ButtonProps {
  status: 'default' | 'active' | 'inactive'
  cardActionResult: CardActionResult
  children: React.ReactNode
  onClick: React.MouseEventHandler
}

const Button = ({
  cardActionResult,
  status,
  children,
  onClick
}: ButtonProps) => {
  const borderColor = {
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
        color: ${colors('grey900')};
        text-decoration: none;
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
          status={
            cardActionTaken === 'default'
              ? 'default'
              : cardActionTaken === 'yesSelected'
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('yes', answer)}
        >
          <H args={{ name: 'yesNoQuizYes' }} />
        </Button>
        <Button
          cardActionResult={cardActionResult}
          status={
            cardActionTaken === 'default'
              ? 'default'
              : cardActionTaken === 'noSelected'
              ? 'active'
              : 'inactive'
          }
          onClick={onButtonClick('no', answer)}
        >
          <H args={{ name: 'yesNoQuizNo' }} />
        </Button>
      </div>
      <>
        <P
          css={css`
            text-align: center;
          `}
        >
          {cardActionResult === 'default' ? (
            <span
              css={css`
                font-size: ${fontSizes(0.85)};
                display: block;
                margin-top: ${spaces('-0.5')};
                color: ${colors('grey800')};
              `}
            >
              <H args={{ name: 'yesNoQuizDontWorry' }} />
            </span>
          ) : (
            <Em>
              <strong>
                {cardActionResult === 'correct' ? (
                  <H args={{ name: 'yesNoQuizCorrect' }} />
                ) : (
                  <H args={{ name: 'yesNoQuizIncorrect' }} />
                )}
              </strong>
              {locale === 'en' && ' '}
              {cardActionResult === 'correct' ? (
                <H args={{ name: 'yesNoQuizCorrectPostfix' }} />
              ) : (
                <H
                  args={{
                    name: 'yesNoQuizIncorrectPostfix',
                    isYes: answer === 'yes'
                  }}
                />
              )}
            </Em>
          )}
        </P>
      </>
    </>
  )
}

export default YesNoButtons
