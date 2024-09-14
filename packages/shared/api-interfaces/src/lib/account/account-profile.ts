import { Gender } from './gender';

export interface AccountProfile {
  id: string
  firstName: string;
  lastName: string;
  gender?: Gender;
  photo?: string;
  minibio?: string;
  birthday?: string;
}
