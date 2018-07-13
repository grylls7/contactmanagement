import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactService } from './contact.service';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {NgxPaginationModule} from 'ngx-pagination';
import { FileSelectDirective } from 'ng2-file-upload';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    HomeComponent,
    EditComponent,
    FileSelectDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
