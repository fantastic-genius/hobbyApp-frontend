import React from 'react';

const Input = ({type, name, classes, labelValue, ...props }) => {
    return (
        <div>
            {labelValue ? (<label className='field-label'>{labelValue}</label>) : ''}
            <input type={type} name={name} className={classes} {...props} />
        </div>
    )
}

export default Input;
