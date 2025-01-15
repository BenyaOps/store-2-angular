import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | null): string {
    if (!value) return '';
    const date = new Date(value);
    const today = new Date();
    return  formatDistance(date, today, { addSuffix: true });
  }

}
