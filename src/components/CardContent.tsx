import React, { useState } from 'react'
import { P, LinkButton } from 'src/components/ContentTags'

export interface CardContentProps {
  children: React.ReactNode
  preview?: {
    content: React.ReactNode
    text: React.ReactNode
  }
}

const CardContent = ({ preview, children }: CardContentProps) => {
  const [previewOnly, setPreviewOnly] = useState(!!preview)
  return (
    <>
      {preview && preview.content}
      {preview && previewOnly && (
        <P>
          <LinkButton onClick={() => setPreviewOnly(false)}>
            {preview.text}
          </LinkButton>
        </P>
      )}
      {!previewOnly && children}
    </>
  )
}

export default CardContent
