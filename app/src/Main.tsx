import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Top from "./components/Top";

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;