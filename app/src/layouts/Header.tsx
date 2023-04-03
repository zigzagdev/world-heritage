import React from "react";
import {Button} from "@mui/material";
import Theme from "../components/Toogle";
import MediaQuery from "react-responsive";

const outline = {
    display: 'flex',
}

const right2 = {
    display: "block",
    margin: '30px 10px'
};

const headerSame = {
    display: "flex",
    margin: "0 40px 0 auto",
};

const tabHead = {
    display: "flex",
    marginLeft: "20px"
};

const sameLine = {
    display: "flex",
    margin: '30px 10px'
}

const tabLine = {
    display: "flex",
    margin: "30px 0"
}

const title = {
    margin: "0 auto 0 35px",
}

const tabTitle = {
    margin: "0 auto 0 10px",
}

const font = {
    fontSize: "30px",
    color: "gray",
}

const Header = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
                <div style={{display: "flex"}}>
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
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768)">
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
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
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
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={{display: "flex"}}>
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
            </MediaQuery>
        </div>
    )
}

export default Header;