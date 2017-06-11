import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAge'
})
export class NameAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return value;
    }
    const separator = args || ',';
    
    const result: string[] = value.split(separator);


    if (result.length > 1) {
      return `${result[0]} is ${result[1]} years old `;
    } else {
      return value;
    }
  }

}
