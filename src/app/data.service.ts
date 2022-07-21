import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name:BehaviorSubject<any>;
  constructor() { 
    this.name=new BehaviorSubject<any>("");
  }
}
