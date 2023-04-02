import React from "react";
import {Button} from "@mui/material";
import Theme from "../components/Toogle"

const outline = {
    display: 'flex',
    height: 100,
    minWidth: '1024px',
}

const right2 = {
    display: "block",
    margin: '30px 10px'
};

const headerSame = {
    display: "flex",
    margin: "0 40px 0 auto",
};

const sameLine = {
    display: "flex",
    margin: '30px 10px'
}

const title = {
    margin: "0 auto 0 35px",
}

const font = {
    fontSize: "30px",
    color: "gray",
}

const Header = () => {
    return (
        <div style={outline}>
            <div style={sameLine}>
                <div style={title}>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong style={font}>World Heritage</strong>
                    </a>
                </div>
            </div>
            <div style={headerSame}>
                <div style={right2}>
                    <Theme/>
                </div>
            </div>
        </div>
    )
}

export default Header;