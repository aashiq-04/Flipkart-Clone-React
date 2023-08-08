import Toys from './Toys';
import Electronics from './electronics';
import logo from './logo.svg';
import Navbar from './navbar';
import Slide from './slide';
import Top from './top';
import Fashion from './fashion';
function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='topA'>
        <Top />
        <Slide />
        <Electronics />
        <Toys />
        <Fashion />
      </div>
    </div>
  );
}

export default App;
