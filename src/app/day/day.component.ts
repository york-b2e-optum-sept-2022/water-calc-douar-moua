import {Component, Input, OnInit} from '@angular/core';
import {DAY_NAME} from "../enums/DAY_NAME";
import {IDay_NAME} from "../interfaces/IDay_NAME";
import {DataService} from "../data.service";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day!: IDay_NAME;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  increase(){
    this.dataService.increaseDayValue(this.day);
    // this.day.current_fL += this.dataService.getBottleSize();
  }

  decrease(){
    this.dataService.decreaseDayValue(this.day);
    // this.day.current_fL -= this.dataService.getBottleSize();
  }

}
