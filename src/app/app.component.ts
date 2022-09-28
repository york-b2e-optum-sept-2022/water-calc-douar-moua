import { Component } from '@angular/core';
import {Data} from "@angular/router";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'water-calc-douar-moua';

  foo: string;

  constructor(private dataService: DataService) {
    this.foo = this.dataService.foo
  }
}
