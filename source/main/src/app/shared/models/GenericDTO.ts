import { v4 as uuidv4 } from 'uuid';

export class GenericDTO {
  id: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this.id = obj?.id || uuidv4();
    Object.keys(this).forEach((key) => {
      if (key != 'id') {
        this[key] = obj[key] || null;
      }
    });
  }
}
