import { Route } from '@angular/router';



export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
    import('@code-compare/compare-editor').then(
      (m) => m.CompareEditorModule
    ), },
];
