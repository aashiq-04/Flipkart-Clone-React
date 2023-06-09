import { useState } from "react";

const Navbar = () => {
    // const[hover,setHover]=useState();
    return (
        <div className="navbar">

            <div className="cont">
                <div className="logo">
                    <div className="ll">
                        <a href="#">
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Logo" className="flip" />
                        </a>
                        <a href="#" className="exp">Explore
                            <span>Plus</span>
                            <img src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Plus" className="plus" />
                        </a>
                    </div>
                </div>
                <div className="search">
                    <form action="?" className="form">
                        <div className="S">
                            <div className="search-box">
                                <input type="text"
                                    title="Search for products, brands and more"
                                    placeholder="Search for products, brands and more" />
                            </div>
                            <button type="submit">
                                <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="login">
                    <div className="log">
                        <div className="l">
                            <div className="l1">
                                <a href="#">Login</a>
                            </div>
                        </div>
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="drop"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg>
                    </div>
                </div>
                <div className="seller">
                    <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect" ><span>Become a seller</span></a>
                </div>
                <div className="more">
                    <div className="mmm">
                        <div className="mm">
                            <div>
                                <div className="m">More</div>
                            </div>
                        </div>
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="drop"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg>
                    </div>
                </div>
                <div className="cart">
                    <div className="cc">
                        <div className="c">
                            <a href="//">
                            <svg class="ic" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                            <span>Cart</span>  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;