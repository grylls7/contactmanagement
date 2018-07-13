import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class ContactService {
  contacts=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getContacts(){
    return this._http.get("http://localhost/api/select.php")
               .pipe(map(res=>
                  {
                    this.checkMe = res; 
                    if(this.checkMe._body !== "0")
                      {return res.json()}
                  }
                )
              );
    }

  addContact(info){
    return this._http.post("http://localhost/api/insert.php",info);
  }

  deleteContact(id){
    return this._http.post("http://localhost/api/delete.php/",{'cd_id':  id})
               .pipe(map(()=>this.getContacts()));
  }
  getContact(id){
    return this._http.post("http://localhost/api/contact.php/",{'cd_id':id})
               .pipe(map(res=>res.json()));
  }
  updateContact(info){
    return this._http.post("http://localhost/api/update.php/", info)
               .pipe(map(()=>""));
  }
}