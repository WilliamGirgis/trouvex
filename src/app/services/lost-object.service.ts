import { Injectable } from '@angular/core';
import { LostObject } from '../shared/lostObjet';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class LostObjectService {

  objectLostList = new BehaviorSubject<LostObject[]>([])

  updateArray(newArray: LostObject[]) {
    this.objectLostList.next(newArray); // Emit the new array
  }

  addItem(item: LostObject) {
    const currentArray = this.objectLostList.getValue(); // Get the current value
    this.objectLostList.next([...currentArray, item]); // Emit the updated array
  }


  constructor() { }
}
