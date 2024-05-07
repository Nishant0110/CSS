import React, { useState } from 'react'

export default function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time)
  // const updateTime = () => {
  //   let newTime = new Date().toLocaleTimeString();
  //   setCtime(newTime)
  // }
  setInterval((updateTime) => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  }, 1000);
  return (
    < div >
      <p>Time is {ctime}</p>
      {/* <button onClick={updateTime}>click here</button> */}
    </div >
  )
}
