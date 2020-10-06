import { auth } from '../../fbaseConfig';

const CurrentUser = () => {
  console.log('jestem w sign in');
  console.log('current user email: ');
  return auth.currentUser.email;
};

export default CurrentUser;
