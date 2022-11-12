import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as DiffMatchPatch from 'diff-match-patch';


@Component({
  selector: 'code-compare-compare-text-area',
  templateUrl: './compare-text-area.component.html',
  styleUrls: ['./compare-text-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompareTextAreaComponent implements OnInit {



    text1 = '';
    text2 = '';
    @ViewChild('outputOldStr', {static: false}) outputOldStr!: ElementRef;
    @ViewChild('outputNewStr', {static: false}) outputNewStr!: ElementRef;

    public ngOnInit() {
      console.log('HEY')
    }

    // countLine() {
    //   const el = this.outputNewStr.nativeElement
    //   let lineCount = 0;
    //   const lines = el.value.split("\n");
    //   for (let i = 0; i < lines.length; i++) {
    //     if (lines[i].length > 0) lineCount++;
    //   }
    //   console.log(lineCount);
    // }

    launchCompareTest(text1: string, text2: string) {
      const dmp = new DiffMatchPatch.diff_match_patch();
      dmp.Diff_EditCost = 8;

      const d = dmp.diff_main(text1, text2);
      // dmp.diff_cleanupEfficiency(d);
      let oldStr = "",
          newStr = "";
      for (let i = 0, j = d.length; i < j; i++) {
          const arr = d[i];
          if (arr[0] == 0) {
              oldStr += arr[1];
              newStr += arr[1];
          } else if (arr[0] == -1) {
              oldStr += "<span class='text-del'>" + arr[1] + "</span>";
          } else {
              newStr += "<span class='text-add'>" + arr[1] + "</span>";
          }
      }
      this.outputNewStr.nativeElement.innerHTML = newStr;
      this.outputOldStr.nativeElement.innerHTML = oldStr;
    }

    onCompare() {
      this.launchCompareTest(this.text1, this.text2);
      // this.countLine();
    }
    onClear() {
      this.text1 = '';
      this.text2 = '';
    }

  }
