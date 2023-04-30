import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "./Top";
import Asia from "./continents/Asia";
import Africa from "./continents/Africa";

const Path = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                    <Route path="/Asia" element={<Asia/>}/>
                    <Route path="/Africa" element={<Africa/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Path;