import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IDay_NAME} from "../interfaces/IDay_NAME";

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent{

  week: IDay_NAME[];
  bottleSize: number = 16;

  constructor(private dataService: DataService) {
    this.week = this.dataService.getWeek();
    this.bottleSize = this.dataService.getBottleSize();

  }

onBottleSizeChange(newValue: number){
    this.dataService.setBottleSize(newValue);
}

}
