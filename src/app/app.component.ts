import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Earth Countries';
  constructor(public jsonService: JsonService) { }
  ngOnInit():void {
    this.jsonService.loadData();
}
}
