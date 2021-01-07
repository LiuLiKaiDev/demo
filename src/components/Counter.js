import React, { useState, useImperativeHandle, forwardRef } from 'react'

function Counter(props, ref) {
  const [count, setCount] = useState(0) 

  const getCount = () => {
    return count
  }

  useImperativeHandle(ref, () => ({
    getCount
  }))

  return (
    <div>
      <p>you click {count} times!</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default forwardRef(Counter)