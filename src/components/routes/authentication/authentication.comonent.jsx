import React from 'react';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.style';

export default function Authentication() {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
}
