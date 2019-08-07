import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>中級編へようこそ！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここからは中級編だ。
                        <Em>
                          約束した通り、これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、やってやる！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>だが問題を出す前に、お前たちに見せたいものがある。</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>見せたいもの？それは何だ？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)
