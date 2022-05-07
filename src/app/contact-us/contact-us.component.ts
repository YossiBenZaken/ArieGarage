import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  name = '';
  email = '';
  phone = '';
  message = '';
  constructor(private db: AngularFirestore) {}

  ngOnInit() {}
  sendMessage() {
    const message: Contact = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message,
    };
    console.log(message);
    this.db.collection('/contact').add(message);
    // alert('ההודעה נשלחה');
  }
}
