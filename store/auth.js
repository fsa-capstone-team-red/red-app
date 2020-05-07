import React from 'react';
import { Constants } from 'expo';

import { auth } from '../Firebase';

// Auth Signup
export const signup = (email, password, loading) => {
	try {
		const user = auth.createUserWithEmailAndPassword(email, password);
		if (user) {
			console.log('NEW USER: ', email, password, user);
			loading = false;
			return user;
		}
	} catch (err) {
		const errMessage = err.message;
		console.log('Signup Error: ', errMessage);
	}
};

// Auth Login
export const login = async (email, password) => {
	try {
		const user = await auth.signInWithEmailAndPassword(email, password);
		console.log('USER LOGGED IN: ', user);
		return user;
	} catch (err) {
		const errMessage = err.message;
		console.log('Login Error: ', errMessage);
	}
};

// Auth Logout
export const logout = () => {
	try {
		auth.signOut();
		console.log('USER OGGED OUT');
		return true;
	} catch (err) {
		const errMessage = err.message;
		console.log('Logout Error: ', errMessage);
	}
};

// Check Login
export const checkLogin = () => {
	try {
		auth.onAuthStateChanged(user => {
			if (user) {
				console.log('USER IS LOGGED IN');
				return true;
			} else {
				console.log('USER IS LOGGED OUT');
				return false;
			}
		});
	} catch (err) {
		console.log('Login Check Error: ', err);
	}
};

// Check Errors
export const checkErrors = (email, password) => {
	switch ((email, password)) {
		case email === '' && password === '':
			return console.log('empty email and password');
		case email !== '' && password === '':
			return console.log('empty password');
		case email === '' && password !== '':
			return console.log('empty email');
		default:
			return console.log('no errors');
	}
};

// User Info
export const getUser = () => {
	const { deviceId, deviceName, platform } = Constants;
	return { deviceId, deviceName, platform };
};
