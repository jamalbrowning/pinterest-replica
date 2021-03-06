import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNav from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

// $('#backed').on('click', console.error('this button works'));
const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNav.logoutEvent();
};

init();
