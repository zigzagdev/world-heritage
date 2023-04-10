import React from 'react'
import MediaQuery from "react-responsive";
import {Card} from "@mui/material";

const Top = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={{padding: '4% 5%'}}>
                    <div>
                        <span style={{color: 'darkred'}}>Popular Heritage</span>
                    </div>
                    <div style={{padding: '4% 3%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsffdfsdafsfdsfsfsd
                        </Card>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '300px', margin: '3%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Top;