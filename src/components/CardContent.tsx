import React, { useState } from 'react'
import { P, LinkButton } from 'src/components/ContentTags'
import useCardScroll from 'src/hooks/useCardScroll'

export interface CardContentProps {
  children: React.ReactNode
  preview?: {
    content: React.ReactNode
    text: React.ReactNode
  }
}

const CardContent = ({ preview, children }: CardContentProps) => {
  const [previewOnly, setPreviewOnly] = useState(!!preview)
  const [previewOnlyChanged, setPreviewOnlyChanged] = useState(false)
  const domRef = useCardScroll<HTMLDivElement>(previewOnlyChanged)
  return (
    <div ref={domRef}>
      {preview && preview.content}
      {preview && previewOnly && (
        <P>
          <LinkButton
            onClick={() => {
              setPreviewOnly(false)
              setPreviewOnlyChanged(true)
            }}
          >
            {preview.text}
          </LinkButton>
        </P>
      )}
      {!previewOnly && children}
    </div>
  )
}

export default CardContent
