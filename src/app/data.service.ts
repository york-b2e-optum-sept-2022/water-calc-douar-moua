import { Injectable } from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {DAY_NAME} from "./enums/DAY_NAME";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  foo='hello world'

//   //hard property & values
//   profile: IProfile = {
//   name: 'test user',
//   weight_lbs: 10,
//   activity_level: 'AVERAGE'
// }
//   //hard property & values
//   day = {
//     name: DAY_NAME.MONDAY,
//     goal_fL: 0,
//     waterQty_fL: 0,
// }
  constructor() { }
}

export class ACTIVITY_LEVEL {
}
