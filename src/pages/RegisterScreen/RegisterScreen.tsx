import './RegisterScreen.css'

import { useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const RegisterScreen = () => {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/home');
    }
    return (
        <div className="register-container">
            <div className='register-form-container'>
                <h1>Register</h1>

                <Input placeholder='Username' type='text' />

                <Input placeholder='Password' type='password' />

                <Input placeholder='Confirm Password' type='password' />

                <Button onClick={() => handleRegisterClick()}>Register</Button>
            </div>
        </div>
    )
}

export default RegisterScreen;