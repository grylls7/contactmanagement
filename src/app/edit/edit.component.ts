import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost/api/upload.php';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) { }
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'cd_image'});

  ngOnInit() {
    this.getContact();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  id = this.route.snapshot.params['id'];
  model = new Contact(this.id);
  getContact(){
    console.log("edit");
    this.contactService
      .getContact(this.id)
      .subscribe(employee =>{
          this.model = employee[0];
          })
  };
  updateContact(){
    this.contactService
      .updateContact(this.model)
      .subscribe(()=> this.goBack());
}

 goBack(){
  this.router.navigate(['/']);
}

}
