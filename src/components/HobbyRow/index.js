import React from 'react';

const FarmerRow = ({hobby, onUpdate, onDelete}) => {
    const {id, name} = hobby ? hobby : '';

    return (
        <tr className='row'>
            <td className='hob-cell'>{name || 'Adventure'}</td>
            <td className='cell'>
                <button data-id={id} className='action-btn' onClick={onUpdate}>update</button>
                <button data-id={id} className='delete-btn' onClick={onDelete}>delete</button>
            </td>
        </tr>
    )
}

export default FarmerRow;
