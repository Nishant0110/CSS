import './App.css';
import { useState } from 'react'
// function App() {
//   let [dataset, setdata] = useState([])
//   let clickfun = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(fetchdata => fetchdata.json())
//       .then(responsedata => setdata(responsedata));
//   }
//   return (
//     <>
//       <button onClick={clickfun}>Click Here</button>
//       {dataset.length > 0 && (
//         dataset.map((a) => (
//           <div key={a.id}>
//             <pre>Id={a.id}</pre>
//             <pre>Title={a.title}</pre>
//           </div>
//         ))
//       )}
//     </>
//   );
// }
function App() {
  let [data, setdata] = useState(0)
  return (
    <>
      <button onClick={() => setdata(data + 1)}>Increment</button>
      <pre>{data}</pre>
      <button onClick={() => setdata(data - 1)}>Decrement</button>
      <button onClick={() => setdata(data = 0)}>Reset</button>
    </>
  );
}
export default App;