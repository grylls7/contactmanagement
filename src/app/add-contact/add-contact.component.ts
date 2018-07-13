import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost/api/upload.php';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router) { }

    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'cd_image'});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
     };

  }

  id : string ;
  model = new Contact(this.id);

  addContact(){
    this.contactService
        .addContact(this.model)
        .subscribe(()=> this.goBack());
  }
  goBack(){
    this.router.navigate(['/']);
  }
}
