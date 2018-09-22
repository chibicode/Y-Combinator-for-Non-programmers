import React from 'react'
import GlobalStyles from 'src/components/GlobalStyles'

const Page: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalStyles>{children}</GlobalStyles>
)

export default Page
