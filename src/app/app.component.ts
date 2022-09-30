import { Component } from '@angular/core';
import {Data} from "@angular/router";
import {DataService} from "./data.service";
import {IProfile} from "./interfaces/IProfile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'water-calc-douar-moua';

  // toggles between profile comp & week comp BASED ON profile null
  // this property exists only on this comp
  isProfileCreated: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.$profile.subscribe(
      (profile) => {
        this.isProfileCreated = true;
      }
    );
  }
}
