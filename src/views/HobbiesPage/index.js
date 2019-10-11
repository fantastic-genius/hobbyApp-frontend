import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import HobbyRow from '../../components/HobbyRow';
import { 
    getUserHobbies, getAnHobby, updateHobby, deleteHobby, createHobby
} from '../../store/actions/hobby';
import Button from '../../components/Button';
import HobbyModal from '../../components/HobbyModal';
import EditHobbyModal from '../../components/EditHobbyModal';

const HobbiesPage = (props) => {
    const [toggle, setToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [update, setUpdate] = useState(false);
    const [values, setValues] = useState({name: ''});
    const [hobbyId, setHobbyId] = useState(null);
    const { 
        hobbies,
        hobby,
        isCompleted,
        isLoading,
        isHobbyLoading,
        isUpdating,
        isDeleting,
        isCreating
    } = props;

    useEffect(()=> {
        props.getUserHobbies();
    },[]);

    const getHobby = async (e) => {
        const button = e.target;
        const hobbyId = button.dataset.id;
        setHobbyId(hobbyId);
        setUpdate(true);
        await props.getAnHobby(hobbyId)
        if(!isHobbyLoading){
            setToggle(false);
            setEditToggle(true) 
        }
    }

    const handleDelete = async (e) => {
        const button = e.target;
        const hobbyId = button.dataset.id;
        setHobbyId(hobbyId);
        await props.deleteHobby(hobbyId);
        if(!isDeleting){
            props.getUserHobbies();
        }
    }

    const loadHobbies = hobbies && hobbies.length ? hobbies.map(hobby  => 
            <HobbyRow
                key={hobby.id}
                hobby={hobby}
                onUpdate={getHobby}
                onDelete={handleDelete}
            />) : (<tr></tr>);

    const showModal = () => {
        setUpdate(false);
        setEditToggle(false);
        setToggle(true);
    }

    const closeModal = () => {
        setToggle(false);
        setEditToggle(false);
    }

    const handleChange = (e) => {
        e.persist();
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]:e.target.value
        }));
    }

    const handleSave = async (e) => {
        e.preventDefault();
        if(update){
            props.updateHobby(hobbyId, values);
            if(!isUpdating){
                setEditToggle(false);
                props.getUserHobbies();
            }
        }else{
            await props.createHobby(values);
            if(!isCreating){
                setToggle(false);
                props.getUserHobbies();
            }

        }
    }

    const loadModal = toggle ? (
        <div className='modal-con'>
            <HobbyModal
                onClick={closeModal}
                onChange={handleChange}
                onSave={handleSave}
            />
        </div>
    ) : '';

    const loadEditModal = editToggle ? (
        <div className='modal-con'>
            <EditHobbyModal
                onClick={closeModal}
                hobby={hobby}
                update={update}
                onChange={handleChange}
                onSave={handleSave}
            />
        </div>
    ) : '';


    return (
        <div className='list-bg'>
            <div className='list-box'>
                <Button 
                    type='button'
                    value='Add Hobby'
                    containerClass='add-btn-con'
                    onClick={showModal}
                />
                <div className='table-con'>
                    {
                        !isLoading ? (
                        <table>
                            <thead>
                                <tr>
                                    <td className='list-row'>Hobby</td>
                                    <td className='cell'>Action</td>
                                </tr>
                            </thead>
                                <tbody>
                                    {loadHobbies}
                                </tbody>

                        </table>) : 
                        (<p>Loading....</p>)
                    }
                    {!isLoading && !hobbies.length ? (<p>You have no hobby</p>): ''}
                </div>
            </div>
            {loadModal}
            {loadEditModal}
        </div>
    )
}

const mapStateToProps = state => ({
    hobbies: state.hobby.hobbies,
    hobby: state.hobby.hobby,
    isLoading: state.hobby.isLoading,
    isCompleted: state.hobby.isCompleted,
    isHobbyLoading:state.hobby.isHobbyLoading,
    isUpdating: state.hobby.isUpdating,
    isDeleting:state.hobby.isDeleting,
    isCreating: state.hobby.isCreating,
});

export default connect(mapStateToProps, {
    getUserHobbies,
    getAnHobby,
    updateHobby,
    deleteHobby,
    createHobby,
})(HobbiesPage);