import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './Footer';
import Mydeatil from './Mydetail';

function App() {
  let name = "abc";
  let l = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <h1>hello</h1>
      <h2>{name}</h2>
      {
        l.map((x) => {
          return (<div>{x}</div>)
        })
      }

      <Header />
      <Footer />
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
function Card() {
  return (<div class="cardItems"></div>)
}
