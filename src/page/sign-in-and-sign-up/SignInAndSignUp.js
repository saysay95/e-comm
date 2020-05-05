import React from 'react'
import './SignInAndSignUp.scss'
import SignIn from '../../component/sign-in/SignIn'
import SignUp from '../../component/sign-up/SignUp'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUp;