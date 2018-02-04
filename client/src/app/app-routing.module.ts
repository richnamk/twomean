import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import { ApptComponent } from './appt/appt.component'
import { ApptNewComponent } from './appt/appt-new/appt-new.component';
import { ApptListComponent } from './appt/appt-list/appt-list.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, children: [
    {path: 'new', component: UserNewComponent}
  ]},

  { path: 'dashboard', component: ApptComponent },
  { path: 'dashboard', component: ApptListComponent},
  { path: 'dashboard/new', component: ApptNewComponent },

  { path: '', pathMatch: 'full', component: UserComponent, children: [
    {path: '', component: UserNewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
