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
function App(){
  return(
  <>
  <button onClick={}>Increment</button>
  <button>Decrement</button>
  <button>Reset</button>
  
  </>
  );
}





export default App;