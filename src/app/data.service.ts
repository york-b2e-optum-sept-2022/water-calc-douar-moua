import {Injectable} from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {DAY_NAME} from "./enums/DAY_NAME";
import {Subject} from "rxjs";
import {IDay_NAME} from "./interfaces/IDay_NAME";
import {ACTIVITY_LEVEL} from "./enums/ACTIVITY_LEVEL";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //this STORES the user input from the setProfile()
  private profile: IProfile | null = null;
  $profile = new Subject<IProfile>()

  private weekDayCount = 7;
  private week: IDay_NAME[] =[]

  private bottleSize_fL: number = 16;

  constructor() {}

  setProfile(profile: IProfile){
    this.profile = profile;

    let dailyGoal;
    try {
      dailyGoal = this.calculateDailyGoal(this.profile);
    } catch (error) {
      console.error(error);
      return;
    }

    for (let i=0;  i < this.weekDayCount; i++) {
      try{
        let day: IDay_NAME = {
          name: this.numberToDayName(i),
          goal_fL: dailyGoal,
          current_fL: 0,
        }
        this.week.push(day);
      } catch (error) {
        console.error(error);
        return;
      }
    }

    this.$profile.next(this.profile);
  }

  calculateDailyGoal(profile: IProfile): number {
    let dayGoal: number = 0
    switch (profile.activity_level) {
      case ACTIVITY_LEVEL.LOW:
        dayGoal = profile.weight_lbs / 0.5;
        break;
      case ACTIVITY_LEVEL.AVG:
        dayGoal = profile.weight_lbs / 0.75;
        break;
      case ACTIVITY_LEVEL.HIGH:
        dayGoal = profile.weight_lbs;
        break;
      default:
        throw new Error('unknown activity level');
    }
    return dayGoal;
  }

  numberToDayName(num: number): DAY_NAME {
    let selectedDay: DAY_NAME;
    switch (num) {
      case 0:
        selectedDay = DAY_NAME.MONDAY;
        break;
      case 1:
        selectedDay = DAY_NAME.TUESDAY;
        break;
      case 2:
        selectedDay = DAY_NAME.WEDNESDAY;
        break;
      case 3:
        selectedDay = DAY_NAME.THURSDAY;
        break;
      case 4:
        selectedDay = DAY_NAME.FRIDAY;
        break;
      case 5:
        selectedDay = DAY_NAME.SATURDAY;
        break;
      case 6:
        selectedDay = DAY_NAME.SUNDAY;
        break;
      default:
        throw new Error('unknown day name')
    }
    return selectedDay;
  }

  getBottleSize(){
    return this.bottleSize_fL;
  }

  setBottleSize(num: number){
    this.bottleSize_fL = num;
  }

  getWeek(){
    return this.week;
  }

  increaseDayValue(day: IDay_NAME,){
    day.current_fL += this.bottleSize_fL;
  }

  decreaseDayValue(day: IDay_NAME){
    day.current_fL -= this.bottleSize_fL;
    if (day.current_fL < 0){
      day.current_fL = 0;
    }
  }
}
