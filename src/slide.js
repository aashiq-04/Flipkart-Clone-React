import { useState } from "react";


const Slide = () => {
    return (
        <div className="slides" style={{ height: "280px" }}>
            <div className="left">
                <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="l-greater"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="FXox6K"></path></svg>
            </div>
            <div className="slide">
                <a href="lll">
                    <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ8v2NPgYQAnfLQFkS84FugqdsxqEyxhJfVttwlRZCQ&usqp=CAU&ec=48665699" alt="sample" />

                </a>
            </div>
            <div className="right">
                <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="r-greater"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="FXox6K"></path></svg>
            </div>

        </div>
    );
}

export default Slide;