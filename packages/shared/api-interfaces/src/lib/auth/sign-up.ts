import { SignIn } from './sign-in';

export interface SignUp extends SignIn {
  email: string;
  firstName: string;
  lastName: string;
}
