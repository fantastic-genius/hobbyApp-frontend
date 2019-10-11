import AxiosCall from '../../../utils'

export const getUserHobbies = () => async dispatch => {
    dispatch({type: 'GET_USER_HOBBIES_PENDING'});
        
    try {
        const callObj = {
            path: 'hobby',
            method: 'get'
        }
        const result = await AxiosCall(callObj);
        
        dispatch({
            type: 'GET_USER_HOBBIES_SUCCESS',
            payload: result
        });
    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'GET_USER_HOBBIES_ERROR',
            payload: error
        });
    }
}

export const getAnHobby = (hobby_id) => async dispatch => {
    dispatch({type: 'GET_HOBBY_PENDING'});
        
    try {
        const callObj = {
            path: `hobby/${hobby_id}`,
            method: 'get'
        }
        const result = await AxiosCall(callObj);
        
        dispatch({
            type: 'GET_HOBBY_SUCCESS',
            payload: result
        });
    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'GET_HOBBY_ERROR',
            payload: error
        });
    }
}

export const updateHobby = (hobby_id, values) => async dispatch => {
    dispatch({type: 'UPDATE_HOBBY_PENDING'});
    try {
        const callObj = {
            path: `hobby/${hobby_id}`,
            method: 'patch',
            data: values
        }
        const result = await AxiosCall(callObj);
        
        dispatch({
            type: 'UPDATE_HOBBY_SUCCESS',
            payload: result
        });
    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'UPDATE_HOBBY_ERROR',
            payload: error
        });
    }
}


export const deleteHobby = (hobby_id) => async dispatch => {
    dispatch({type: 'DELETE_HOBBY_PENDING'});
        
    try {
        const callObj = {
            path: `hobby/${hobby_id}`,
            method: 'delete'
        }
        const result = await AxiosCall(callObj);
        
        dispatch({
            type: 'DELETE_HOBBY_SUCCESS',
            payload: result
        });
    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'DELETE_HOBBY_ERROR',
            payload: error
        });
    }
}

export const createHobby = (values) => async dispatch => {
    dispatch({type: 'CREATE_HOBBY_PENDING'});
        
    try {
        const callObj = {
            path: `hobby`,
            method: 'post',
            data: values
        }
        const result = await AxiosCall(callObj);
        
        dispatch({
            type: 'CREATE_HOBBY_SUCCESS',
            payload: result
        });
    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'CREATE_HOBBY_ERROR',
            payload: error
        });
    }
}
