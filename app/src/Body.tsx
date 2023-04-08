import React from 'react';
import MediaQuery from "react-responsive";

const Body = () => {
    return (
        <div style={{paddingTop: "40px"}}>
            <MediaQuery query="(max-width: 640px)">
                <div>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong>World Heritage</strong>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
        </div>
    );
};

export default Body;