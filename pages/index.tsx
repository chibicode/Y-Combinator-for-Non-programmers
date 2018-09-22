import { css } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import Page from 'src/components/Page'
import fontSizes from 'src/lib/theme/fontSizes'
import { ns } from 'src/lib/theme/mq'
import spaces from 'src/lib/theme/spaces'

const Index: React.SFC<{}> = () => (
  <Page>
    <Container>
      <div
        className={css`
          padding: ${spaces(20)} 0;
          font-size: ${fontSizes(32)};
          ${ns(css`
            padding: ${spaces(160)} 0;
          `)};
        `}
      >
        <p>Welcome to Hoshiai.</p>
      </div>
    </Container>
  </Page>
)

export default Index
