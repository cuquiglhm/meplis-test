import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const INITIAL_COMPONENT = HomeComponent;

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: INITIAL_COMPONENT }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
