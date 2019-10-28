import React, { useState } from 'react'
import { P, LinkButton } from 'src/components/ContentTags'
import ExpressionRunnerScrollAdjuster from 'src/components/ExpressionRunnerScrollAdjuster'

export interface CardContentProps {
  children: React.ReactNode
  preview?: {
    content?: React.ReactNode
    text: React.ReactNode
    afterText?: React.ReactNode
  }
}

const CardContent = ({ preview, children }: CardContentProps) => {
  const defaultPreviewOnly = process.env.isDevelopment ? false : !!preview
  const [previewOnly, setPreviewOnly] = useState(defaultPreviewOnly)
  return (
    <>
      {preview && preview.content}
      <ExpressionRunnerScrollAdjuster />
      {preview && (process.env.isDevelopment || previewOnly) && (
        <>
          <P>
            <LinkButton
              onClick={() => {
                setPreviewOnly(false)
              }}
            >
              {preview.text}
            </LinkButton>
          </P>
          {preview.afterText}
        </>
      )}
      {!previewOnly && children}
    </>
  )
}

export default CardContent
