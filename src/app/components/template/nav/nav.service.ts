import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private menuSubject = new BehaviorSubject(false);

  constructor() { }

  menu(): Observable<boolean> {
    return this.menuSubject.asObservable();
  }

  open() {
    this.menuSubject.next(!this.menuSubject.value);
  }
}
