import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather-App';
  toggleActive(bars: Element, navMenu: Element) {
    bars.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
}
