import Toys from './Toys';
import Electronics from './electronics';
import logo from './logo.svg';
import Navbar from './navbar';
import Slide from './slide';
import Top from './top';
import Fashion from './fashion';
import ImgLink from './ImgLink';
import Footer from './Footer';
import Bottom from './Bottom';
function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='topA'>
        <Top />
        <Slide />
        <Electronics />
        <ImgLink />
        <Toys />
        <Fashion />
        <Footer />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
