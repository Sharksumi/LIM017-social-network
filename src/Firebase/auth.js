/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './init.js';

export const auth = getAuth(app);
/* const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
} */
// proveedor Gmail auth

export const provider = new GoogleAuthProvider();

export const createAccountByGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });
};

// Intento de crear cuenta con correo Email

export const CreateAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user.email);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const paragraphError = document.querySelector('#error');

      if (errorCode === 'auth/email-already-in-use') {
        paragraphError.classList.add('showParagraphError');
        paragraphError.innerText = 'Usuario ya registrado y en uso';
      } else if (errorCode === 'auth/weak-password') {
        paragraphError.classList.add('showParagraphError');
        paragraphError.innerText = 'Contraseña inaválida. Debe contener al menos 6 caracteres';
      } else if (errorCode === 'auth/invalid-email') {
        paragraphError.classList.add('showParagraphError');
        paragraphError.innerText = 'correo electrónico inválido';
      } else if (errorCode === true) {
        paragraphError.classList.add('showParagraphError');
        paragraphError.innerText = errorMessage;
      }
    });
};

// Intento de ingresar con correo y contraseña...

export const LoginByEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const paragraphErrorLogin = document.querySelector('#errorLogin');

      if (errorCode === 'auth/user-not-found') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = 'Usuario no registrado';
      } else if (errorCode === 'auth/wrong-password') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = 'Contraseña inválida.';
      } else if (errorCode === 'auth/internal-error') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = '';
      } else if (errorCode === true) {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = errorMessage;
      }
    });
};
