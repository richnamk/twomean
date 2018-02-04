import { Component, OnInit } from '@angular/core';
import { ApptService } from '../appt.service';
import { Appt } from '../appt'
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appt-list',
  templateUrl: './appt-list.component.html',
  styleUrls: ['./appt-list.component.css']
})
export class ApptListComponent implements OnInit {
  appointments: Appt[] = [];
  user: User = new User();

  constructor(
    private _userService: UserService,
    private _apptService: ApptService,
    private _route: Router
  ) {}

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        console.log(this._userService.currentUser);
        if (!user) {
          this._route.navigateByUrl('/');
          return;
        }
        this.user = user;
      },
      console.log
    );

    this._apptService.retrieveAppointments(
      (appointments) => {
        this.appointments = appointments;
        console.log(appointments);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id) {
    this._apptService.deleteAppointment(id,
      (appointment) => {

        this._apptService.retrieveAppointments(
          (appointments) => {
            this.appointments = appointments;
            console.log(appointments);
          },
          (err) => {
            console.log(err);
          }
        );
        console.log(appointment);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}