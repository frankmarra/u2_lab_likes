import React from 'react'
import Likes from './Likes'

const LikedTotal = (props) => {
  return (
    <div className="count">
      <p>{props.totalLikes}</p>
    </div>
  )
}

export default LikedTotal
