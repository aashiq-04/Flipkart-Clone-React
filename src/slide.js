import { useState } from "react";

const Slide = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="slides">
            <div style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
                {/* <img src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/645cf9502f202096.jpg?q=50" alt="aaa" /> */}
            </div>
        </div>
    );
}

export default Slide;