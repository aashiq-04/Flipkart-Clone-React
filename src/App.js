import logo from './logo.svg';
import Navbar from './navbar';
import Slide from './slide';
import Top from './top';

function App() {
  // const slides = [
  //   { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ8v2NPgYQAnfLQFkS84FugqdsxqEyxhJfVttwlRZCQ&usqp=CAU&ec=48665699" },
  //   { url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d6dc40011f48d2da.jpg?q=50" },
  //   { url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/9ec62d3c41932728.jpg?q=50" },
  //   { url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/30b0e892420793da.jpg?q=50" }
  // ]


  return (
    <div className="App">
      <Navbar />
      <Top />
      <Slide/>
    </div>
  );
}

export default App;
