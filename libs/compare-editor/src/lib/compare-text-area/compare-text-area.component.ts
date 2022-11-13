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
    @ViewChild('codemirror', {static: false}) codemirror!: ElementRef;


    codeMirrorOptions: any = {
      mode: 'application/xml',
      htmlMode: true,

      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      readOnly: 'nocursor',

      indentWithTabs: true,
      smartIndent: true,
      lineWrapping: false,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      autoCloseBrackets: true,
      firstLineNumber: 79,
      // lineNumberFormatter: this.lineNumberFormatter(79),
      lint: true
    };

    query!: string;

    lineNumberFormatter(lineNumber: number) {
      // const startNumberLine = 50;
      // const endNumberLine = 0;
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];

      // }
    }

    public ngOnInit() {
      console.log('HEY')
      this.query = `<TEST>sajdlhfjl</TEST>
      <div><h1>HELLO</h1></div>
      onCompare() {
        this.launchCompareTest(this.text1, this.text2);
      }`;
      console.log(this.codemirror);
    }

    setEditorContent(event: any) {
      // console.log(event, typeof event);
      console.log(this.query);
    }





    launchCompareTest(text1: string, text2: string) {
      const dmp = new DiffMatchPatch.diff_match_patch();
      dmp.Diff_EditCost = 8;

      const d = dmp.diff_main(text1, text2);
      dmp.diff_cleanupEfficiency(d);
      let oldStr = "",
          newStr = "";
      for (let i = 0, j = d.length; i < j; i++) {
          const arr = d[i];
          if (arr[0] == 0) {
              oldStr += arr[1];
              newStr += arr[1];
              console.log(oldStr, 'old strng')
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
    }
    onClear() {
      this.text1 = '';
      this.text2 = '';
    }

  }
