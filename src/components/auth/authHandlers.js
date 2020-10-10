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
      // console.log(cred);
      return cred;
    })
    .then((cred) => {
      console.log('CRED z REJESTRACJI: ', cred);
      return db.collection('app-users').doc(cred.user.uid).set({ email: cred.user.email });
    })
    .then((data) => console.log('Zarejestrowalismy: ', data))
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
            console.log('a tutaj jest jego cred.uid: ', cred.user.uid);
            console.log('a tutaj jest jego cred samo: ', cred);
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
