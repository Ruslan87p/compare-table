import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareTextAreaComponent } from './compare-text-area/compare-text-area.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DiffMatchPatchModule } from 'ng-diff-match-patch';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule,
    DiffMatchPatchModule,
    RouterModule.forChild([{
      path: '',
      component: CompareTextAreaComponent}
  ])],
  declarations: [CompareTextAreaComponent]
})
export class CompareEditorModule {}
