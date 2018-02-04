import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Appt } from './appt';

@Injectable()
export class ApptService {
  appts: Appt[];

  constructor(
    private _http: Http
  ) { }

  createAppointment(appt: Appt, callback, errorback) {
    this._http.post('/appts', appt).subscribe(
      (res) => {
        const appt = res.json();
        this.appts.push(appt);
        callback(this.appts);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  retrieveAppointments(callback, errorback) {
    this._http.get('/appts').subscribe(
      (res) => {
        const appts = res.json();
        this.appts = appts;
        callback(appts);
      },
       (err) => {
         errorback(err.json());
       }
      )
   }

   deleteAppointment(id, callback, errorback) {
    this._http.delete('/appts/' +id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  cancel(callback, errorback) {
    this._http.get('/appts').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }
}
