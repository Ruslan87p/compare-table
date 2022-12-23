import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDiffComponent } from './text-diff/text-diff.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormatLinePipe } from './compare/formater-line.pipe';
import { NgxTextDiffComponent } from './compare/tmp-table-differences';
import { HttpClientModule } from '@angular/common/http';
import { TextDataService } from './text-data.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(appRoutes)],
  declarations: [TextDiffComponent, NgxTextDiffComponent, FormatLinePipe],
  providers: [TextDataService]
})
export class CompareTmpEditorModule {}
