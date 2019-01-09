import React from 'react'
import Content from 'src/components/Content'
import GlobalContext from 'src/components/GlobalContext'
import SideNoteSection from 'src/components/SideNoteSection'
import pathHelpers from 'src/lib/pathHelpers'

const EpisodePageInitialRenderWarning: React.FC<{
  lessonName: keyof typeof pathHelpers
}> = ({ lessonName }) => (
  <GlobalContext.Consumer>
    {({ initialRender }) =>
      initialRender && (
        <SideNoteSection color="yellow">
          <Content name="others/NewUser" componentProps={{ lessonName }} />
        </SideNoteSection>
      )
    }
  </GlobalContext.Consumer>
)

export default EpisodePageInitialRenderWarning
