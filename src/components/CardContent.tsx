import React from 'react'
import { P } from 'src/components/ContentTags'

export interface CardContentProps {
  children: React.ReactNode
  preview?: React.ReactNode
}

const CardContent = ({ preview, children }: CardContentProps) => (
  <>
    {preview}
    {preview && <P>Test</P>}
    {children}
  </>
)

export default CardContent
