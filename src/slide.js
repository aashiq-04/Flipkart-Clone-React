import { useState } from "react";


const Slide = () => {
    const [Image, setImage] = useState("https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20   ");


    const change=()=>{
        setImage("https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d6dc40011f48d2da.jpg?q=50");
    }

    const back=()=>{
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ8v2NPgYQAnfLQFkS84FugqdsxqEyxhJfVttwlRZCQ&usqp=CAU&ec=48665699");
    }
    return (
        <div className="slides" style={{ height: "280px" }}>

            <button className="left-button" onClick={back}>&lt;</button>
            <div className="slide">
                <a href="lll">
                    <img className="img1" src={Image} alt="sample" />

                </a>
            </div>
            <button className="right-button" onClick={change}> &gt;</button>

        </div>

    );
}

export default Slide;