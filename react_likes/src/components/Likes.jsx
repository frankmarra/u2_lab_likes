import React, { useState } from 'react'
import LikedTotal from './LikedTotal'

const Likes = () => {
  let [totalLikes, setAmount] = useState(0)

  const addLikes = () => {
    totalLikes++
    setAmount(totalLikes)
  }

  const removeLikes = () => {
    if (totalLikes <= 0) {
      console.log('stay positive!')
    } else {
      totalLikes--
      setAmount(totalLikes)
    }
  }

  return (
    <div className="counter">
      <LikedTotal totalLikes={totalLikes} />
      <input className="btn" type="submit" value="+" onClick={addLikes} />
      <input className="btn" type="submit" value="-" onClick={removeLikes} />
    </div>
  )
}
export default Likes
