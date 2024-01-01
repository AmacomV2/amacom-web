import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapping',
})
export class MappingPipe implements PipeTransform {
  transform(value: any, type: any): any {
    if (type === 'date') {
      return new Date(value).toLocaleDateString();
    }
    if (type === 'uuid') {
      return value.slice(0, 8);
    }
    return value;
  }
}


export enum TypeMapper {
  DATE = 'date',
  UUID = 'uuid',
  STRING = 'string',
}