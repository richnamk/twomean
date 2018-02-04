import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import { ApptComponent } from './appt/appt.component';
import { ApptListComponent } from './appt/appt-list/appt-list.component';
import { ApptNewComponent } from './appt/appt-new/appt-new.component';
import { ApptService } from './appt/appt.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    ApptComponent,
    ApptListComponent,
    ApptNewComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ApptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
