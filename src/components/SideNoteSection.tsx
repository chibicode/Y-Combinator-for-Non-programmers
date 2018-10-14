import { css } from 'emotion'
import React from 'react'
import { H3 } from 'src/components/ContentTags'
import SectionContext from 'src/components/SectionContext'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

interface SideNoteProps {
  heading?: React.ReactNode
  children: React.ReactNode
}

const SideNoteSection: React.SFC<SideNoteProps> = ({ children, heading }) => (
  <SectionContext.Provider value={{ currentSection: 'sideNote' }}>
    <div
      className={css`
        padding: ${spaces(0.75)} ${spaces(1)};
        border: 1px solid ${colors('indigo300')};
        background: ${colors('indigo50')};
        margin: 1.5rem 0;
        border-radius: ${radii(0.25)};
        font-size: ${fontSizes(0.85)};
      `}
    >
      {heading && (
        <H3
          className={css`
            text-align: center;
            margin: 0;
          `}
        >
          {heading}
        </H3>
      )}
      {children}
    </div>
  </SectionContext.Provider>
)

export default SideNoteSection
