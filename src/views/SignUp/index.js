import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signup as signupAction } from '../../store/actions/auth';

const SignUp = (props) => {
    const { isAuthenticated, error, history} = props;
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: ''
    });

    const handleChange = (e) => {
        e.persist();
        setValues(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.signupAction(values);
    };

    useEffect(() => {
        if(isAuthenticated){
            history.push('/hobby');
        }
    }, [isAuthenticated]);

    return (
        <div className='page-bg'>
            <div className='card'>
                <h2 className='title'>Sign Up</h2>
                <p class='error'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type='text'
                        name='first_name'
                        classes='field'
                        placeholder='First Name'
                        labelValue='First Name'
                        required
                        onChange={handleChange}
                    />
                    <Input 
                        type='text'
                        name='last_name'
                        labelValue='Last Name'
                        placeholder='Last Name'
                        classes='field'
                        required
                        onChange={handleChange}
                    />
                    <Input 
                        type='email'
                        name='email'
                        classes='field'
                        placeholder='john@example.com'
                        labelValue='Email'
                        required
                        onChange={handleChange}
                    />
                    <Input 
                        type='text'
                        name='phone_no'
                        classes='field'
                        placeholder='08012345678'
                        labelValue='Phone Number'
                        required
                        onChange={handleChange}
                    />
                    <Input 
                        type='password'
                        name='password'
                        classes='field'
                        labelValue='Password'
                        required
                        onChange={handleChange}
                    />
                    <div className='auth-btn-con'>
                        <span>Already have an account? <a href='/login'>Login</a></span>
                        <Button 
                            type='submit'
                            value='Sign Up'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
});

export default connect(mapStateToProps, {signupAction})(SignUp);
