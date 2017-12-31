import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JsonService } from './json.service';
//import { AddCommentComponent } from './add-comment.component';
import { ListCountries } from './list.countries';


@NgModule({
  declarations: [
    AppComponent, ListCountries
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([ {path: 'list',
    component: ListCountries}])
  ],
  providers: [JsonService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
