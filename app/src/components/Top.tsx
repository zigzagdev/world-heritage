import React from 'react';
import {Card} from "@mui/material";
import {Link} from 'react-router-dom';
import SideBar from "./items/SideBar";

const Top = () => {
    return (
        <>
            <div className='max-w-[1400px] mx-10 mb-8 md:mx-5 sm:mx-5 xs:mx-8 xxs:mx-8'>
                <h1 className='xs:text-center xs:font-mono xxs:text-center xxs:font-mono'>Popular Places</h1>
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
                <div className='my-14'>
                    <div className='my-7'>
                        <h2 className='xs:text-center xs:font-mono xxs:text-center xxs:font-mono'>Each Continent</h2>
                    </div>
                    <div className="
                     grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3
                     sm:gap-4 gap-y-4 sm:gap-y-8 xs:grid-cols-1  xs:justify-items-center xxs:grid-cols-1
                     xxs:justify-items-center"
                    >
                        <div className="mx-3.5">
                            <div className='text-center'>
                                <Link to='/Asia'>
                                    <Card style={{background: 'red', height: '100px', width: '240px'}}>
                                        <p className='my-10'>Asia Lists</p>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Top;