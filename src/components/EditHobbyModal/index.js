import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const HobbyModal = ({
    onClick, hobby, onChange, onSave
}) => {
    const {name} =  hobby ? hobby : '';
    return (
        <div className='modal'>
            <div className='head-con'>
                <h2 className='title'>
                    {'Edit Your Hobby'}
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
                    defaultValue={name}
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
