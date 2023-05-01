import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "./Top";
import Asia from "./continents/Asia";

const Path = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                    <Route path="/Asia" element={<Asia/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Path;