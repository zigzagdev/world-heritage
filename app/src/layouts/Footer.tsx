import React from 'react';
import MediaQuery from "react-responsive";

const outline = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '10%'
}

const Footer = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
                <div style={outline}>
                    <div>
                        test1
                    </div>
                    <div>
                        test2
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div style={outline}>
                    <div>
                        test1
                    </div>
                    <div>
                        test2
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div style={outline}>
                    <div>
                        test1
                    </div>
                    <div>
                        test2
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={outline}>
                    <div>
                        test1
                    </div>
                    <div>
                        test2
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default Footer;