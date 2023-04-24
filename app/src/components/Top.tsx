import React from 'react';
import {
    Card,
    Grid,
    Paper,
    Typography
} from "@mui/material";


const Top = () => {
    return (
        <>
            <div className='max-w-[1400px] mx-10 mb-8 md:mx-5 sm:mx-5 xs:mx-8 xxs:mx-8'>
                <strong>Popular Places</strong>
                <div className='my-5'>
                    <div className="
                     grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3
                     sm:gap-4 gap-y-4 sm:gap-y-8 xs:grid-cols-1  xs:justify-items-center xxs:grid-cols-1
                     xxs:justify-items-center"
                    >
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                        <div className="mx-3.5">
                            <Card style={{background: 'red', height: '100px', width: '240px'}}>Fuji</Card>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default Top;