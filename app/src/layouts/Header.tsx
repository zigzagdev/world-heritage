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
    marginLeft: "100px"
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

const minFont = {
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
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div style={{display: "flex", margin: "30px 20px", justifyContent: "space-between"}}>
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
                <div style={{display: "flex", margin: "30px 20px", justifyContent: "space-between"}}>
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
                <div style={{display: "flex", margin: "30px 20px", justifyContent: "space-between"}}>
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



































