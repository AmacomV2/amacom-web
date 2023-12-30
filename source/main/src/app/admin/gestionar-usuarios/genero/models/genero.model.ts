import { v4 as uuidv4 } from 'uuid';

export class GeneroList {
  id: number;
  name: string;
  createdAt: string;
  constructor(generoList: GeneroList) {
    {
      this.id = generoList.id || uuidv4();
      this.name = generoList.name || '';
      this.createdAt = generoList.createdAt;
    }
  }
}