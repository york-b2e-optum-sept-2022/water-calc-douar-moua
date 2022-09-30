import {Component, OnInit} from '@angular/core';
import {ACTIVITY_LEVEL} from "../enums/ACTIVITY_LEVEL";
import {DataService} from "../data.service";
import {IProfile} from "../interfaces/IProfile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //properties | also stores user input via [(ngModel)] in corresponding html file
  name: string = '';
  weight_lbs: number = 0;
  activityLevel!: ACTIVITY_LEVEL;

  //before using the Service's properties & values
  //you have to create a local copy that is set to = the service property & value

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  //this CAPTURES & STORES user input
  onSubmit(){
    console.log('submit clicked!')
    console.log(this.name)
    console.log(this.weight_lbs)
    console.log(this.activityLevel)
    //AND THEN SENDS it to Data Service
    this.dataService.setProfile({
      name: this.name,
      weight_lbs: this.weight_lbs,
      activity_level: this.activityLevel
    })
  }

  //this CAPTURES the activity selection data
  onActivityLevelClick(selection: string){
    console.log(selection)

    switch (selection){
      case "LOW":
        this.activityLevel = ACTIVITY_LEVEL.LOW;
        break;
      case "AVERAGE":
        this.activityLevel = ACTIVITY_LEVEL.AVG;
        break;
      case "HIGH":
        this.activityLevel = ACTIVITY_LEVEL.HIGH;
        break;
      default:
        console.error('unknown activity level selected')
    }
  }

}
