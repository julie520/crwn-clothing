import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInAndsignUpcontainer } from './sign-in-and-sign-up.styles';

const SignInAndSignPage = () => {
  return (
    <SignInAndsignUpcontainer>
      <SignIn />
      <SignUp />
    </SignInAndsignUpcontainer>
  );
};

export default SignInAndSignPage;
