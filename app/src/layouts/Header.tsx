import React from "react";
import {Button} from "@mui/material";
import Theme from "../components/Toogle";
import MediaQuery from "react-responsive";

const outline = {
    display: "flex",
    margin: "30px 20px",
    justifyContent: "space-between"
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

const minFont = {
    fontSize: "30px",
    color: "gray",
}

const Header = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
                <div style={outline}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={{fontSize: '20px'}}>World Heritage</strong>
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
                <div style={{display: "flex", margin: "30px 50px", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={font}>World</strong>
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
                <div style={{display: "flex", margin: "30px 70px", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={font}>World</strong>
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
                <div style={{display: "flex", margin: "30px 100px", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong style={font}>World</strong>
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