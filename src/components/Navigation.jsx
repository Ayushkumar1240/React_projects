import { useEffect, useState } from "react"

const Navigation = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
   alert("Count changed to: ", count);
  },[count])
  return (
    <div>
      <button onClick={()=>setCount((prevCount)=>prevCount-1)}>-</button>
      <p>{count}</p>
      <button onClick={()=>setCount((nextCount)=>nextCount+1)}>+</button>
      </div>
  )
}

export default Navigation