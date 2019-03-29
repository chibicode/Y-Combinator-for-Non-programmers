import React, { useState } from 'react'
import { P, LinkButton } from 'src/components/ContentTags'
import H from 'src/components/H'

export interface CardContentProps {
  children: React.ReactNode
  preview?: React.ReactNode
}

const CardContent = ({ preview, children }: CardContentProps) => {
  const [previewOnly, setPreviewOnly] = useState(!!preview)
  return (
    <>
      {preview}
      {previewOnly && (
        <P>
          <LinkButton onClick={() => setPreviewOnly(false)}>
            <H args={{ name: 'continueReading' }} />
          </LinkButton>
        </P>
      )}
      {!previewOnly && children}
    </>
  )
}

export default CardContent
