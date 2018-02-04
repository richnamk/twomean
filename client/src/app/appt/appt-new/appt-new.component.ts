import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApptService } from '../appt.service';
import { Appt } from '../appt';

@Component({
  selector: 'app-appt-new',
  templateUrl: './appt-new.component.html',
  styleUrls: ['./appt-new.component.css']
})
export class ApptNewComponent implements OnInit {
  appointment: Appt;

  constructor(
    private _route: Router,
    private _apptService: ApptService
  ) { }

  ngOnInit() {
    this.appointment = new Appt();
  }

  onSubmit(){
    this._apptService.createAppointment(this.appointment,
      (appointment) => {
        console.log(appointment);
        this.appointment = new Appt();
        this._route.navigateByUrl('/dashboard');
      },
      (err) => {
        console.log('errors', err);
      }
    )
  }

  cancel(){
    this._apptService.cancel(
      (res) => {
        console.log(res);
        this._route.navigateByUrl('/dashboard');
      },
      console.log
    )
  }
}