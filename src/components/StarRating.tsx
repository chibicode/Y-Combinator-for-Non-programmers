import React, { Fragment } from 'react'
import GreyStar from 'src/components/CustomEmoji/GreyStar'
import Emoji from 'src/components/Emoji'

const StarRating = ({ num }: { num: number }) => (
  <>
    {Array.from({ length: num }).map((_, i) => (
      <Fragment key={`star${i}`}>
        <Emoji size="star">⭐️</Emoji>{' '}
      </Fragment>
    ))}
    {Array.from({ length: 5 - num }).map((_, i) => (
      <Fragment key={`graystar${i}`}>
        <Emoji size="star" customChildren={<GreyStar />} />{' '}
      </Fragment>
    ))}
  </>
)

export default StarRating
