import React, {useState} from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signin as signinAction } from '../../store/actions/auth';

const SignIn = (props) => {
    const { isCompleted, error, history} = props;
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        e.persist();
        setValues(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await props.signinAction(values);
        if(isCompleted){
            console.log(history);
            history.push('/hobby');
        }
    }
    return (
        <div className='page-bg'>
            <div className='card'>
                <h2 className='title'>Sign In</h2>
                <form onSubmit={handleSubmit}>
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
                        type='password'
                        name='password'
                        classes='field'
                        labelValue='Password'
                        required
                        onChange={handleChange}
                    />
                    <div className='auth-btn-con'>
                        <span>Don't have an account? <a href='/'>SIgn Up</a></span>
                        <Button 
                            type='submit'
                            value='Login'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isCompleted: state.auth.isCompleted,
    isLoading: state.auth.isLoading,
    error: state.auth.error
});

export default connect(mapStateToProps, {signinAction})(SignIn);