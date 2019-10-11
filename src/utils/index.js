import Axios from 'axios';

const AxiosCall = async (callObj) => {
    const { path , method, data, contentType } = callObj;

    const headers = {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': contentType || 'application/json',
      };

    const url = `http://localhost:8000/api/v1/${path}`;
    try {
        const response = await Axios({
            method,
            url,
            data,
            headers,
            json: true
        });
        
        const result = response && response.data
        return result;
    } catch (error) {
        throw error;
    }
}

export default AxiosCall;
