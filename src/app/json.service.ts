import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JComment } from './jcomment.class';

@Injectable()
export class JsonService {
    comments: JComment[];
   isReady = false;

    constructor(private http: Http) {

    }


    loadData(): void {
        const obs = this.http.get('https://restcountries.eu/rest/v2/all');
        obs.subscribe(value => {
            this.comments = value.json();
         this.isReady = true;
        });
    }

    getComments(): JComment[] {
        return this.comments;
    }
}
