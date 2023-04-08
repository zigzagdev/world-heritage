import React from 'react';
import MediaQuery from "react-responsive";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "../components/Top";

const Body = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Top" element={<Top/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Body;