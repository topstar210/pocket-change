import React from 'react';

const Card = ({ title, description, color, bgColor = "" }) => {
    return <div style={{ color }} className={`w-full h-[170px] relative ${bgColor} rounded-xl shadow-2xl`}>
        <p className='text-[32px] absolute top-1/2 translate-y-[-34px] left-1/2 -translate-x-1/2'>{title}</p>
        <p className='text-base w-full text-center absolute left-1/2 -translate-x-1/2 bottom-5'>{description}</p>
    </div>
}

export default Card;