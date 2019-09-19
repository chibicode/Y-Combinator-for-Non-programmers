import React from 'react'
import DemoJp from 'src/contents/demo.jp'
import DemoEn from 'src/contents/demo.en'
import locale from 'src/lib/locale'

const DemoCardList = () => (locale === 'en' ? <DemoEn /> : <DemoJp />)

export default DemoCardList
