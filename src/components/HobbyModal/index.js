import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const HobbyModal = ({
    onClick, onChange, onSave 
}) => {
    return (
        <div className='modal'>
            <div className='head-con'>
                <h2 className='title'>
                    {'Add your hobby'}
                </h2>
                <button className='close-btn' onClick={onClick}>X</button>
            </div>
            <form onSubmit={onSave}>
                <Input 
                    type='text'
                    name='name'
                    classes='field'
                    placeholder='Hobby'
                    labelValue='Hobby'
                    required
                    onChange={onChange}
                />
                <div className='btn-con'>
                    <Button 
                        type='submit'
                        value='Save'
                    />
                </div>
            </form>
        </div>
    )
}

export default HobbyModal;
