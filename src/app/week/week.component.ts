import { Component, } from '@angular/core';
import {DataService} from "../data.service";
import {IDay_NAME} from "../interfaces/IDay_NAME";
import {IProfile} from "../interfaces/IProfile";

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent{

  week: IDay_NAME[];
  bottleSize: number = 16;
  profile!: IProfile;
  weeklyGoal: number;
  currentProgress: number;

  constructor(private dataService: DataService) {
    this.week = this.dataService.getWeek();
    this.bottleSize = this.dataService.getBottleSize();
    this.weeklyGoal = this.dataService.getWeeklyGoal()
    this.currentProgress = this.dataService.getCurrentProgress();
    this.dataService.$currentProgress.subscribe((newValue => {
      this.currentProgress = newValue;
    }))

    try {
      this.profile = this.dataService.getProfile();
    } catch (error) {
      console.error('no profile found')
    }

  }

onBottleSizeChange(newValue: number){
    this.dataService.setBottleSize(newValue);
}

}
