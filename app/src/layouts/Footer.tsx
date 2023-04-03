import React from 'react';
import MediaQuery from "react-responsive";
import Theme from "../components/Toogle";

const inner = {
    display: "inline-block",
    verticalAlign: "top",
    margin: "0 20px",
}

const leftInner = {
    display: "inline-block",
    verticalAlign: "top",
    margin: "0 70px 0 20px",
}

const outline = {
    display: "grid",
}

const right1 = {
    color: "darkblue",
    fontSize: "24px",
    textDecoration: "none",
}

const Footer = () => {
    return (
        <div style={outline}>
            <MediaQuery query="(max-width: 767px)">
                fsadfsafsadfasdfttt
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
                kkrkrkrkrkrkrkrkrkrkrk
            </MediaQuery>
        </div>
    )
}
export default Footer;