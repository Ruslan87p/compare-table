import { Route } from '@angular/router';
import { TextDiffComponent } from './text-diff/text-diff.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TextDiffComponent,
  }
];
