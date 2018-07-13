import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AddContactComponent } from '../app/add-contact/add-contact.component';
import { HomeComponent } from '../app/home/home.component';
import { EditComponent } from '../app/edit/edit.component';
import { DetailComponent } from '../app/detail/detail.component';

const routes: Routes = [
  {path:"", redirectTo:"/", pathMatch:"full"},
  {path:"add", component:AddContactComponent},
  {path:"", component:HomeComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"detail/:id", component:DetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
