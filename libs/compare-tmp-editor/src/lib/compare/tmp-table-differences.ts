import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { DiffContent, DiffTableFormat, DiffTableRowResult, DiffResults } from './tmp-table-differences-models';
import { NgxTextDiffService } from './tmp-table-differences.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'code-compare-table-differences',
  templateUrl: './tmp-table-differences.html',
  styleUrls: ['./tmp-table-differences.css'],
})
export class NgxTextDiffComponent implements OnInit, OnDestroy {
  @Input() format: DiffTableFormat = 'SideBySide';
  @Input() left = '';
  @Input() right = '';
  @Input() diffContent!: Observable<DiffContent>;
  @Input() numberLine!: number;
  @Input() compareRowsStyle: any;
  @Input() beforeTableLines!: number;
  @Input() afterTableLines!: number;
  @Output() compareResults = new EventEmitter<DiffResults>();
  subscriptions: Subscription[] = [];
  tableRows: DiffTableRowResult[] = [];
  filteredTableRows: DiffTableRowResult[] = [];
  filteredTableRowsLineByLine: DiffTableRowResult[] = [];
  diffsCount = 0;
  linesBeforeArr = [];


  constructor(
    private diff: NgxTextDiffService
  ) {}

  ngOnInit() {

    console.log(this.beforeTableLines, this.afterTableLines, 'AFTER BEFORE')
    this.diff.startLineNumber.next(this.numberLine)
    if (this.diffContent) {
      this.subscriptions.push(
        this.diffContent.subscribe(content => {
          this.left = content.leftContent;
          this.right = content.rightContent;
          this.renderDiffs()
        })
      );
    }
  }



  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }


   renderDiffs() {
      this.diffsCount = 0;
      this.tableRows = this.diff.getDiffsByLines(this.left, this.right);
      this.diffsCount = this.tableRows.filter(row => row.hasDiffs).length;
      this.filteredTableRows = this.tableRows;
  }
}
