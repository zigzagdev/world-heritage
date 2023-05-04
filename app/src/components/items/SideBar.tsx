import React, {useState} from "react";
import {Link} from "react-router-dom";
import './css/Sidebar.css'

const SideBar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="header">
            <Link to='/'>
                Top
            </Link>
            <Link to='/'>
                Top
            </Link>
            <Link to='/'>
                Top
            </Link>
        </div>
    );
};

export default SideBar;