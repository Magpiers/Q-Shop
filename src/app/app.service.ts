import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public selectedLink = new BehaviorSubject<string>('Dashboard');

  constructor() { 
    // this.selectedLink = new BehaviorSubject<string>;
  }

  setSelectedLink(selectedLink): void {
    this.selectedLink.next(selectedLink);
  }

  getSelectedLink(): Observable<string> {
    return this.selectedLink.asObservable();
  }
}
