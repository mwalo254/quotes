import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Quotes } from './quotes';

const routes: Routes = [
   {
        path: './quotes-form.component.html',
        component: Quotes,
    },
  {
    path:'',
    component:Quotes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
