import AxiosCall from '../../../utils'

export const signup = values => async dispatch => {
    dispatch({type: 'SIGNUP_PENDING'});

    try{
        const callObj = {
            path: 'register',
            method: 'post',
            data: values 
        }
        const result = await AxiosCall(callObj);
        dispatch({
            type:'SIGNUP_SUCCESS', 
            payload:result
        });

        localStorage.setItem('token', result.token);

    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'SIGNUP_ERROR',
            payload: error
        });
    }
}

export const signin = values => async dispatch => {
    dispatch({type: 'SIGNIN_PENDING'});

    try{
        const callObj = {
            path: 'login',
            method: 'post',
            data: values 
        }
        const result = await AxiosCall(callObj);
        dispatch({
            type:'SIGNIN_SUCCESS', 
            payload:result
        });

        localStorage.setItem('token', result.token);

    } catch (err) {
        const {response} = err;
        let error = response && response.data.error;
        if(typeof(error) === 'object'){
            const objKeys = Object.keys(error);
            const firstKey = objKeys[0]; 
            error = error[firstKey][0];
        }
        dispatch({
            type: 'SIGNIN_ERROR',
            payload: error
        });
    }
}
