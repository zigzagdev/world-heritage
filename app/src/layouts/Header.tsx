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
    marginLeft: "40px",
};

const maxHeaderSame = {
    display: "flex",
    marginLeft: "700px",
};

const tabHead = {
    display: "flex",
    padding: "4% 9%",
    justifyContent: "space-between"
}

const font = {
    fontSize: "30px",
    color: "gray",
}

const Header = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
                <div style={{display: "flex", margin: "30px 20px", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={{fontSize: '20px', color: 'gray'}}>World Heritage</strong>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Theme/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div style={{display: "flex", padding: "4% 9%", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={{fontSize: '25px', color: 'gray'}}>World Heritage</strong>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Theme/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div style={{display: "flex", padding: "4% 9%", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={font}>World Heritage</strong>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Theme/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={{display: "flex", padding: "4% 9%", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={font}>World Heritage</strong>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Theme/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Header;