import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'StringToDate'})
export class StringToDate implements PipeTransform {
  transform(value: string): Date {
    return new Date(value);
  }
}