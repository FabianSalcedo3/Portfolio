import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  lastScroll: number = 0;
  shrink: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    let firstScroll = window.scrollY;
    if (firstScroll >= this.lastScroll) {
      this.shrink = true;
    } else {
      this.shrink = false;
    }

    this.lastScroll = firstScroll;
  }
}
