import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "./Top";
import Asia from "./continents/Asia";
import Africa from "./continents/Africa";
import SouthAmerica from "./continents/SouthAmerica";

const Path = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                    <Route path="/Asia" element={<Asia/>}/>
                    <Route path="/Africa" element={<Africa/>}/>
                    <Route path="/SouthAmerica" element={<SouthAmerica/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Path;