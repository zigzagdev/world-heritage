import React from 'react';
import MediaQuery from "react-responsive";
import Theme from "./components/Toogle";

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

const Body = () => {
    return (
        <div style={{paddingTop: "40px"}}>
            <MediaQuery query="(max-width: 640px)">
                <div>
                    <p style={{textAlign: "center"}}>hhhhhhhhh</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768)">
                <div>
                    <p style={{textAlign: "center"}}>hhhhhhhhh</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div>
                    <p style={{textAlign: "center"}}>hhhhhhhhh</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div>
                    <p style={{textAlign: "center"}}>hhhhhhhhh</p>
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