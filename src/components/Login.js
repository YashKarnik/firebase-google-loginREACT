import firebase from 'firebase/app';
import React from 'react';
import { Button } from '@material-ui/core';
import { useThemeContext } from '../contexts/themeContext';
import { useUserContext } from '../contexts/userAuthContext';
import { Google } from '../assets/svg/SVGindex';

import { auth } from '../firebase';

export default function Login() {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	function handleSubmit(e) {
		e.preventDefault();
	}

	function login(e) {
		e.preventDefault();
		auth
			.signInWithPopup(provider)
			.then(user => console.log(user))
			.catch(err => console.log(err));
	}

	return (
		<div>
			<form className='dead-center' onSubmit={handleSubmit}>
				<Button
					size='large'
					variant='outlined'
					color='default'
					onClick={login}
					className='btn btn-light animate__animated animate__fadeInDown'>
					<Google fontSize='large' />
					Log in with google
				</Button>
			</form>
		</div>
	);
}
