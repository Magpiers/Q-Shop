import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  selectedLinkName: string
  subscriptions: Array<any> = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.subscriptions.push(this.appService.getSelectedLink().subscribe(linkName => {
      this.selectedLinkName = linkName;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unSubscribe());
  }
}
