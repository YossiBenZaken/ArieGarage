import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Ticket {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private _http: HttpClient) { }

  createTicket(body: Ticket): Observable<Ticket> {
    return this._http.post<Ticket>('http://localhost:3000/contact', body, { headers: this.headers });
  }
  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

}
