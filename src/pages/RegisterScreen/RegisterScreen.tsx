import './RegisterScreen.css'
import Input from '../../components/common/Input';

const RegisterScreen = () => {
    return (
        <div className="register-container">
            <div className='register-form-container'>
                <h1>Register</h1>

                <Input placeholder='Username' type='text' />

                <Input placeholder='Password' type='password' />

                <Input placeholder='Confirm Password' type='password' />
            </div>
        </div>
    )
}

export default RegisterScreen;