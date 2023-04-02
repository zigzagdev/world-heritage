import React from 'react';
import Theme from '../components/Toogle'

const Header = () => {
    return (
        <div style={{padding: '25px 40px'}}>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <div style={{}}>
                    WorldHeritage
                </div>
                <Theme/>
            </div>
        </div>
    );
};

export default Header;