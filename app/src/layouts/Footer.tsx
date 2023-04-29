import React from 'react';

const Footer = () => {
    return (
        <div className="my-10 xxs:flex-col xxs:justify-center xxs:items-center flex justify-end px-10">
            <a href='/' className='text-black-500 xxs:text-gray-500 xxs:py-3'>
                Top
            </a>
            <div className='text-black-500 px-12 xxs:text-gray-500 xxs:py-3'>
                SNS
            </div>
            <div className='text-black-500 xxs:text-gray-500 xxs:py-3'>
                Privacy
            </div>
        </div>
    )
}
export default Footer;