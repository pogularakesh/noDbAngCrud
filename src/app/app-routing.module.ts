import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {path:'',component:AddComponent},
  {path:'show',component:ShowComponent},
  {path:'dialog',component:DialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
