import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDiffComponent } from './text-diff/text-diff.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormatLinePipe } from './compare/formater-line.pipe';
import { NgxTextDiffComponent } from './compare/tmp-table-differences';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [TextDiffComponent, NgxTextDiffComponent, FormatLinePipe],
})
export class CompareTmpEditorModule {}
