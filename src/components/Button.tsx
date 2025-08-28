import React from 'react'

const Button = ({ text, color, rounded }) => {
    return (
        <div>
            <button className='px-5 relative z-1 lg:font-semibold font-medium py-1.5 text-white' style={{ backgroundColor: `${color}`, borderRadius: `${rounded}` }}>{text}</button>
        </div>
    )
}

export default Button;
