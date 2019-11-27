import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfilDocument } from '../../firebase/firebase-utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfilDocument(user, { displayName });
      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('CREATE USERWITHEMAILANDPASSWORD ERROR', error);
    }
  };

  const { displayName, email, password, confirmPassword } = state;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
