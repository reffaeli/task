import { Component, OnInit } from '@angular/core';

import { JsonService } from './json.service';
import { JComment } from './jcomment.class';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'list',
    templateUrl: './list.countries.html',
   // styleUrls: ['./list.component.css']
})

export class ListCountries implements OnInit {
    comments: JComment[];


    constructor(private jsonService: JsonService) {  }

    ngOnInit() {
        //this.jsonService.getCommentsObservable().subscribe(
        //    value => {
        //        this.filterList();
        //    });
        this.filterList();
    }

    filterList(): void {
     //   if (!this.bodyFilter)   //!!
           this.comments = this.jsonService.getComments().slice(0, 10);
        //else
          //  this.comments = this.jsonService.getComments().filter(comment => comment.body.indexOf(this.bodyFilter) > -1);
    }
  }
