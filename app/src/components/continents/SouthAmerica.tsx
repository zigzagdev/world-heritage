import React from 'react';
import PostCard from "../items/PostCard";
import {Card} from "@mui/material";

type SouthAmericaHeritage = {
    id: number;
    name: string;
    category: number;
    explanation: string;
}


function SouthAmerica() {
    return (
        <>
            <div className='max-w-[1300px] mx-10 mb-8 md:mx-5 sm:mx-5 xs:mx-8 xxs:mx-8'>
                <div className='my-9 mx-24 md:mx-8 xs:mx-5 xxs:mx-3'>
                    <h1 className='xxs:items-center xs:items-center my-7 xs:my-3.5 xxs:my-2.5'>
                        Top popular Heritage in SouthAmerica Rank
                    </h1>
                    <div className="
                     grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2
                     sm:gap-4 gap-y-4 sm:gap-y-8 xs:grid-cols-1  xs:justify-items-center xxs:grid-cols-1
                     xxs:justify-items-center"
                    >
                        <div className="mx-4 my-3 md:mx-2.5">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Fuji</Card>
                        </div>
                        <div className="mx-4 my-3 md:mx-2.5">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Fuji</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Fuji</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Fuji</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Fuji</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>
                                Fuji
                            </Card>
                        </div>
                    </div>
                    <h2 className='xxs:items-center xs:items-center my-7 xs:my-3.5 xxs:my-2.5'>
                        World heritage famous country
                    </h2>
                    <div className="
                     grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2
                     sm:gap-4 gap-y-4 sm:gap-y-8 xs:grid-cols-1  xs:justify-items-center xxs:grid-cols-1
                     xxs:justify-items-center"
                    >
                        <div className="mx-4 my-3 md:mx-2.5">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Argentina</Card>
                        </div>
                        <div className="mx-4 my-3 md:mx-2.5">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Brazil</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Japan</Card>
                        </div>
                        <div className="mx-4 my-3">
                            <Card style={{background: 'red', height: '200px', width: '300px'}}>Ecuador</Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SouthAmerica;