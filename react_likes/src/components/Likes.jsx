import React, { useState } from 'react'

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
      <div className="count">
        <p>{totalLikes}</p>
      </div>
      <input className="btn" type="submit" value="+" onClick={addLikes} />
      <input className="btn" type="submit" value="-" onClick={removeLikes} />
    </div>
  )
}
export default Likes
