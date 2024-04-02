// import React from "react";
// export default class App extends React.Component {
//   state = { name: "nishant" };
//   constructor(props) {
//     super(props)
//     this.state = { name: "nishant" }
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (props.name !== state.name) {
//       return ({ abc: props.name })
//     }
//     return null;
//   }
//   componentDidMount() {
//     console.log("component has been mounted")
//   }
//   componentWillUnmount() {
//     console.log("Component will unmount")
//   }
//   render() {
//     return (<p>{this.state.name}</p>)
//   }
// }




// import React, { useEffect } from "react";

// let api = ""
// let fetch = fetch(api)
// .then(Response => Response.json())
// .then(jasondata => console.log(jasondata))

// useEffect(()=>{
//   fetch()
// },[])



import React, { useState } from "react";
export default function App() {
  let [a, seta] = useState(0)

  return (
    <>
      <button onClick={() => { seta(a + 1) }}>Increment</button>
      <p>{a}</p>
      <button onClick={() => { seta(a - 1) }}>Decrement</button>
    </>
  )
}