import React from 'react';
import Input from '../Input';

const Button = ({type, value, classes, containerClass, ...props}) => {
    return (
        <div className={containerClass || ''}>
            <Input
                type={type}
                value={value}
                classes={`btn ${classes || ''}`}
                {...props}
            />
        </div>
    );
}

export default Button;
