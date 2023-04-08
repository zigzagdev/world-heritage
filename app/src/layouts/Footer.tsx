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
                    <div style={{paddingBottom: '8%',}}>
                        <div style={{display: 'inline', padding: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Search</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Top</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>SNS</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div style={outline}>
                    <div style={{paddingBottom: '8%',}}>
                        <div style={{display: 'inline', padding: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Search</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Top</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>SNS</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div style={outline}>
                    <div style={{paddingBottom: '8%',}}>
                        <div style={{display: 'inline', padding: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Search</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Top</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>SNS</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={outline}>
                    <div style={{paddingBottom: '8%',}}>
                        <div style={{display: 'inline', padding: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Search</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>Top</strong>
                            </a>
                        </div>
                        <div style={{display: 'inline', margin: '0 7%'}}>
                            <a href="/" style={{textDecoration: 'none'}}>
                                <strong style={{fontSize: '30px'}}>SNS</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default Footer;