import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuicknotesComponent} from './quicknotes/quicknotes.component'
import {LoginComponent} from './login/login.component'
export const routes: Routes = [ {path:'quicknotes', component:QuicknotesComponent},
{path:'login', component:LoginComponent},{ path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
