import { Route } from '@angular/router';



export const remoteRoutes: Route[] = [
  // {
  //   path: '',
  //   component: RemoteComponent
  // },
  {
    path: '',
    loadChildren: () =>
    import('@code-compare/compare-tmp-editor').then(
      (m) => m.CompareTmpEditorModule
    ),
  },
];
