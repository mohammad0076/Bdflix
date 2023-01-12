import React from 'react';
import Buttom from '../Home/Buutom Bar/Buttom';
import Buttome from '../Home/Buutom Bar/Buttome';

const Footer = () => {
    return (
        <div>
            <p>Footer update</p>
            <div className='md:hidden' style={{
                position: "fixed",
                bottom: "0"
            }}>
                <Buttom></Buttom>
            </div>

        </div>
    );
};

export default Footer;