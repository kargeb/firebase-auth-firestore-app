import { auth } from '../../fbaseConfig';

const SignIn = () => {
  console.log('jestem w sign in');
  console.log(auth.currentUser);
};

export default SignIn;
