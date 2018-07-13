import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.getContactDetail();
  }
  
  contact:Contact;
  getContactDetail(){
    var id = this.route.snapshot.params['id'];
    this.contactService
        .getContact(id)
        .subscribe(contact =>{
            this.contact = contact[0];
        })
  };

  goBack(){
    this.router.navigate(['/']);
  }
}
