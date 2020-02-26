import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private defId = new BehaviorSubject(0);
  currId = this.defId.asObservable();
  
  constructor() { }

  changeId(newId:number) {
    this.defId.next(newId);
  }
}
