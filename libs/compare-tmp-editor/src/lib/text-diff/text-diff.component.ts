import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DiffResults } from '../compare/tmp-table-differences-models';


export interface DiffContent {
  leftContent: string;
  rightContent: string;
}

@Component({
  selector: 'code-compare-text-diff',
  templateUrl: './text-diff.component.html',
  styleUrls: ['./text-diff.component.scss'],
})
export class TextDiffComponent implements OnInit {

  content: DiffContent = {
    leftContent: '',
    rightContent: ''
  };

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();

  // constructor() {}

  ngOnInit() {
    this.content.leftContent =
      '<card xmlns="http://businesscard.org">\n' +
      '   <name>John Doe</name>\n' +
      '   <title>CEO, Widget Company COO </title>\n' +
      '   <email>john.Moe@widget.com</email>\n' +
      '   <cellphone>(202) 456-1414</cellphone>\n' +
      '   <phone>(202) 456-1414</phone>\n' +
      '   <logo url="widget.gif"/>\n' +
      ' </card>\n' +
      ' <dhfkghdkgdkhgkdjgh>';
    this.content.rightContent =
      '<card xmlns="http://businesscard.org">\n' +
      '   <name>John Moe</name>\n' +
      '   <title>CEO, Widget Inc.</title>\n' +
      '   <email>john.Moe@widget.com</email>\n' +
      '   <phone>(202) 456-1414</phone>\n' +
      '   <address>Test</address>\n' +
      '   <logo url="widget.gif"/>\n' +
      ' </card>\n' +
      ' <dhrtkghdkkhgkdjgh>'

      setTimeout( () => {
        this.submitComparison();
      },100)
  }

  submitComparison() {
    this.contentObservable.next(this.content);
  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }

}
