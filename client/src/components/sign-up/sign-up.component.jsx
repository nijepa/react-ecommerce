import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords doesnt match");
            return;
        }

        signUpStart({ email, password, displayName });
    };

    const handleChange = event => {
        const { value, name} = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-up'>
            <h2 className='title'> Do not have account</h2>
            <span>Sign Up with Your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    name='displayName'
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput
                    name='email'
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    name='password'
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required />
                <FormInput
                    name='confirmPassword'
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign up </CustomButton>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);