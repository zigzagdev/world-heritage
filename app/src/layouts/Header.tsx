import React from "react";
import Theme from "../components/Toogle";
import MediaQuery from "react-responsive";

const outline = {
    display: "flex",
    padding: "4% 6%",
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
                <div style={outline}>
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
                <div style={outline}>
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
                <div style={outline}>
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
                <div style={outline}>
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