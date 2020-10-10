import { db } from '../../fbaseConfig';

export const getUserNameAndId = (uid) =>
  db
    .collection('app-users')
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log('USER o ID: ', uid, ' istnieje');
        return doc.data();
      }
      console.log('USER nie istnieje taki');
      return null;
    })
    .catch((err) => console.log(err));
