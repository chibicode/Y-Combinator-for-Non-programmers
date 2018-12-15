import React, { Fragment } from 'react'
import GreyStar from 'src/components/CustomEmoji/GreyStar'
import Emoji from 'src/components/Emoji'
import Star from 'src/components/Twemoji/2b50'

const NUM_STARS = 5

const StarRating = ({ num }: { num: number }) => (
  <>
    {Array.from({ length: num }).map((_, i) => (
      <Fragment key={`star${i}`}>
        <Emoji size="star" customChildren={<Star />} />{' '}
      </Fragment>
    ))}
    {Array.from({ length: NUM_STARS - num }).map((_, i) => (
      <Fragment key={`graystar${i}`}>
        <Emoji size="star" customChildren={<GreyStar />} />{' '}
      </Fragment>
    ))}
  </>
)

export default StarRating
