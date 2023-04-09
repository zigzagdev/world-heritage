import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "../components/Top";

function Body() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Top" element={<Top/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Body;