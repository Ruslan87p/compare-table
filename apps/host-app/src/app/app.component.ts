import { Component } from '@angular/core';

@Component({
  selector: 'code-compare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // codeMirrorOptions: any = {
  //   mode: 'application/xml',
  //   htmlMode: true,
  //   indentWithTabs: true,
  //   smartIndent: true,
  //   lineNumbers: true,
  //   lineWrapping: false,
  //   extraKeys: { 'Ctrl-Space': 'autocomplete' },
  //   gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  //   autoCloseBrackets: true,
  //   matchBrackets: true,
  //   lint: true
  // };

  query!: string;


  public ngOnInit() {
    console.log('HOST APP INIT')
  }

  setEditorContent(event: any) {
    // console.log(event, typeof event);
    // console.log(this.query);
  }

}
