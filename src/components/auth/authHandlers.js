import { auth } from '../../fbaseConfig';

export const GetCurrentUser = () => {
  if (auth.currentUser) {
    return auth.currentUser.email;
  }
  return '-there is no user-';
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

export const logoutUser = () => {
  auth
    .signOut()
    .then(() => {
      console.log('Wylogowano');
    })
    .catch((err) => console.log(err));
};
