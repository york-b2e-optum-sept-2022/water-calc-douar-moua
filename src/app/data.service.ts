import { Injectable } from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {DAY_NAME} from "./enums/DAY_NAME";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  foo='hello world'

  constructor() { }
}

export class ACTIVITY_LEVEL {
}
