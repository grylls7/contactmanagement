import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _contactService: ContactService,
     private router: Router) {}

  contacts:any;   
  p: number = 1;
  sno: number = 1;
  ngOnInit() {
    this.getContacts();
  }
  getContacts(){
    this._contactService
       .getContacts()
       .subscribe(contacts => {
         this.contacts = contacts;
     } )
 }
 deleteContact(id){
     this._contactService
       .deleteContact(id)
       .subscribe(() => {
       this.getContacts();
     } )
 }
}
