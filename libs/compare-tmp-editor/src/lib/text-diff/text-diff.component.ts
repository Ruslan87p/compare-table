import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { DiffResults } from '../compare/tmp-table-differences-models';
import { TextDataService } from '../text-data.service';


export interface DiffContent {
  leftContent: string;
  rightContent: string;
}

@Component({
  selector: 'code-compare-text-diff',
  templateUrl: './text-diff.component.html',
  styleUrls: ['./text-diff.component.scss'],
})
export class TextDiffComponent implements OnInit, OnDestroy {

  content: DiffContent = {
    leftContent: '',
    rightContent: ''
  };
  isLoading = true;

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();
  subscription: Subscription = new Subscription;
  numberLine = 17;
  constructor(
    private textSvs: TextDataService
  ) {}

  getData() {
    return this.textSvs.getCodeData().subscribe( (item) => {
      if (item) {
        console.log(item, 'item')
        // this.content.leftContent = item.diffs.codeAfter
        // this.content.rightContent = item.diffs.codeAfter
        this.submitComparison();
      }
    })
  }


  ngOnInit() {

    this.subscription.add(this.getData())
    this.content.leftContent =
      `<card xmlns="http://businesscard.org">
         <name>John Doe</name>
         <title>CEO, Widget Company COO </title>
         <email>john.Moe@widget.com</email>
         <cellphone>(202) 456-1414</cellphone>
         <phone>(202) 456-1414</phone>
         <logo url="widget.gif"/>
       </card>
       <dhfkghdkgdkhgkdjgh>`
    this.content.rightContent =
      `<card xmlns="http://businesscard.org">
         <name>John Moe</name>
         <title>CEO, Widget Inc.</title>
         <email>john.Moe@widget.com</email>
         <phone>(202) 456-1414</phone>
         <address>Test</address>
         <logo url="widget.gif"/>
       </card>
       <dhrtkghdkkhgkdjgh>`
  }

  submitComparison() {
    this.isLoading = false;
    this.contentObservable.next(this.content);
  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
