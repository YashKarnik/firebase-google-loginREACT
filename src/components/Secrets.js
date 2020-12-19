import React from 'react';
import { useUserContext } from '../contexts/userAuthContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
export default function Secrets() {
	const history = useHistory();
	const { currentUser, logout } = useUserContext();
	const { displayName, photoURL, email } = currentUser;
	async function handleClick() {
		try {
			await logout();
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='dead-center text-center'>
			<img src={photoURL} />
			<h1>{displayName}</h1>
			<h1>{email}</h1>
			<Button
				onClick={handleClick}
				type='submit'
				size='large'
				variant='outlined'
				color='default'
				className='btn btn-light animate__animated animate__fadeInDown'>
				Sign Out
			</Button>
		</div>
	);
}
