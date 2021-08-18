import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather-App';
  constructor() {}
  toggleActive(bars: Element, navMenu: Element) {
    bars.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
  toggleDarkMode() {
    let darkModeToggle = document.querySelector('.darkModeToggle');
    let body = document.body;
    darkModeToggle?.classList.toggle('darkMode');
    body.classList.toggle('dark');
  }
}
