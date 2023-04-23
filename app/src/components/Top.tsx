import React from 'react';
import {Card} from "@mui/material";


const Top = () => {
    return (
        <>
            <div className='pb-5 px-8'>
                <strong>Popular Places</strong>
                <div className='py-10 flex px-3 justify-between flex-wrap'>
                    <Card style={{width: '200px', height: '100px'}} className='mx-2 my-5'>
                        Conan
                    </Card>
                    <Card style={{width: '200px', height: '100px'}} className='mx-3 my-5'>
                        Conan
                    </Card>
                    <Card style={{width: '200px', height: '100px'}} className='mx-3 my-5'>
                        Conan
                    </Card>
                    <Card style={{width: '200px', height: '100px'}} className='mx-3 my-5'>
                        Conan
                    </Card>
                    <Card style={{width: '200px', height: '100px'}} className='mx-3 my-5'>
                        Conan
                    </Card>
                    <Card style={{width: '200px', height: '100px'}} className='mx-3 my-5'>
                        Conan
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Top;