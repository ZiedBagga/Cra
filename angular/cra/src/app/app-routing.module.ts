import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CraHomeComponent } from './cra-home/cra-home.component';
import { CraCalendarComponent } from './cra-calendar/cra-calendar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { CraFormComponent } from './cra-form/cra-form.component';

const routes: Routes = [
    
  { path: "home", component: CraHomeComponent }  ,
  { path: 'form', component: CraFormComponent }  ,
  { path: 'calendar', component: CraCalendarComponent } ,
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
