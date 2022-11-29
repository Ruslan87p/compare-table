import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLine'
})
export class FormatLinePipe implements PipeTransform {
  transform(line: string): string {
    if (!line) {
      return ' ';
    }
    // console.log(line, 'LINE')
    return line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/ /g, '&nbsp;');
  }
}
