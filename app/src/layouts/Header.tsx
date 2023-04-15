import React from "react";
import Theme from "../components/Toogle";
import '../index.css';

const Header = () => {
    return (
        <>
            <div className="
                xxs: flex justify-between py-9 px-5
                sm:flex justify-between py-9 px-8
                md:flex justify-between py-9 px-11
                lg:flex justify-between py-10 px-14
                xl:flex justify-between py-11 px-16
            ">
                <div>
                    <a href="/" className="decoration-neutral-50">
                        <strong>World Heritage</strong>
                    </a>
                </div>
                <div>
                    <Theme/>
                </div>
            </div>
        </>
    )
}

export default Header;