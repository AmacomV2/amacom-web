import { PersonDTO } from './auth.person.response';
import { Role } from './role';

export class User {
  id!: string;
  img!: string;
  email!: string;
  username!: string;
  password?: string;
  fullName!: string;
  // firstName!: string;
  // lastName!: string;
  role!: Role;
  token!: string;

  person?: PersonDTO;
}
