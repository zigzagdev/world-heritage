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
        <div style={{paddingTop: "40px"}}>
            <MediaQuery query="(max-width: 640px)">
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/Top" element={<Top/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 641px) and (max-width: 768px)">
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/Top" element={<Top/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 769px) and (max-width: 1024px)">
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/Top" element={<Top/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 1025px)">
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/Top" element={<Top/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </MediaQuery>
        </div>
    );
};

export default Body;