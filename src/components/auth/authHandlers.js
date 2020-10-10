import { auth, db } from '../../fbaseConfig';

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
    .then(
      (cred) => {
        return db
          .collection('app-users')
          .doc('1')
          .get()
          .then((doc) => {
            console.log('pobralem uzytkoniwka: ', doc.data());
            return doc.data();
          });
      },

      // (cred) =>
      //   new Promise((resolve) => {
      //     console.log('ZALOGOWAŁEM:', cred);
      //     console.log(cred);
      //     setTimeout(() => {
      //       console.log('JESTEM Z SETTIMEUTA!');
      //       resolve(cred);

      //     }, 2000);
      //   }),
    )
    .then((cred) => {
      console.log('teraz dopiero po innym promisie przekacyje dane CRED: ', cred);
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
