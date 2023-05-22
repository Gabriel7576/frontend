import { Component } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public opened: boolean = false;

  constructor(public nav: NavService) {
    this.nav.menu().subscribe(b => {
      this.opened = b;
    })
  }
}
