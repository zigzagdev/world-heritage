import React from 'react'
import MediaQuery from "react-responsive";
import {Card} from "@mui/material";

const Top = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 640px)">
                <div style={{padding: '4% 5%'}}>
                    <div style={{justifyContent: 'space-between'}}>
                        <span style={{color: 'darkred'}}>Popular Heritage</span>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                    <div style={{justifyContent: 'space-between'}}>
                        <span style={{color: 'darkred'}}>Popular Heritage</span>
                    </div>
                    <div style={{padding: '4% 5%'}}>
                        <Card style={{width: '300px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%'}}>
                        <Card style={{width: '300px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%'}}>
                        <Card style={{width: '300px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div style={{padding: '4% 5%', display: 'flex', flexWrap: 'nowrap'}}>
                    <div style={{justifyContent: 'space-between'}}>
                        <span style={{color: 'darkred'}}>Popular Heritage</span>
                    </div>
                    <div style={{padding: '4% 5%', display: 'flex'}}>
                        <Card style={{width: '300px', height: '130px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '300px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                    <div style={{padding: '4% 5%'}}>
                        <Card style={{width: '300px', margin: '1% 3%'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div style={{padding: '4% 5%'}}>
                    <div style={{justifyContent: 'space-between'}}>
                        <span style={{color: 'darkred'}}>Popular Heritage</span>
                    </div>
                    <div style={{padding: '4% 3%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                        <Card style={{width: '340px', margin: '3% 2%', height: '230px'}}>
                            dfsdfdsf
                        </Card>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Top;