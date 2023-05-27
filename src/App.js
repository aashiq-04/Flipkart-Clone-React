import logo from './logo.svg';
import Navbar from './navbar';
import Slide from './slide';
import Top from './top';

function App() {
  const slides = [
    { url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/645cf9502f202096.jpg?q=50" },
    { url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d6dc40011f48d2da.jpg?q=50" },
    { url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/9ec62d3c41932728.jpg?q=50" },
    { url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/30b0e892420793da.jpg?q=50" }
  ]
  const containerStyles={
    width: "500px",
    height: ""
  }


  return (
    <div className="App">
      <Navbar />
      <Top />
      <div style={containerStyles}>
        <Slide slides={slides} />
      </div>
    </div>
  );
}

export default App;
