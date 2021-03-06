import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpxvPW_eMRvLfJT69JgzHcDIdpL6fXqgo',
  authDomain: 'firestore-learning-56b58.firebaseapp.com',
  databaseURL: 'https://firestore-learning-56b58.firebaseio.com',
  projectId: 'firestore-learning-56b58',
  storageBucket: 'firestore-learning-56b58.appspot.com',
  messagingSenderId: '184262655979',
  appId: '1:184262655979:web:84c3d3dfe85203201ca3ae',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const mergeArray = firebase.firestore.FieldValue.arrayUnion;
export const auth = firebase.auth();
export const db = firebase.firestore();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: '1:184262655979:web:84c3d3dfe85203201ca3ae',
// };
