import React from "react";
import Toggle from "../components/Toogle";
import '../index.css';
import Toogle from "../components/Toogle";

const Header = () => {
    return (
        <>
            <div className="justify-between py-10 px-14 xxs: flex justify-between py-9 px-5">
                <div>
                    <a href="/" className="decoration-neutral-50">
                        <strong>World Heritage</strong>
                    </a>
                </div>
                <div>
                    <Toogle/>
                </div>
            </div>
        </>
    )
}

export default Header;