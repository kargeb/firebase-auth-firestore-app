import { auth } from '../../fbaseConfig';

export const GetCurrentUser = () => {
  console.log('auth: ', auth);
  return auth.currentUser.email;
};

export const createNewUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log('STWORZYLEM UZYTKONIWKA', cred);
      console.log(cred);
      return cred;
    })
    .catch((err) => console.log(err));
};

export const signInUser = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log('ZALOGOWAŁEM:', cred);
      console.log(cred);
      return cred;
    })
    .catch((err) => console.log(err));
};
