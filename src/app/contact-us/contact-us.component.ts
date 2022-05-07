import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ticket, TicketsService } from '../services/tickets.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  fullName = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  message = new FormControl('');
  constructor(private _ticketService: TicketsService) { }
  sendMessage() {
    const body: Ticket = {
      fullName: this.fullName.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value
    };
    this._ticketService.createTicket(body).subscribe(res => console.log(res));
  }

}
