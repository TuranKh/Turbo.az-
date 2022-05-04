import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(res => res.AdminModule)},
  {path: '', loadChildren: () => import('./layout/layout.module').then(res => res.LayoutModule)},
  {path: '**', redirectTo: '/' }
];

/*

/admin +
/'' + 'bos iceri' + home
/new-announce

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
