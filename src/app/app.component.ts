import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rosary';

  get isAvailableTresMesesSaoJose(): boolean {
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();

    const DAY_SAO_JOSE = 19;
    const allowedMonths = [1, 2];

    const isDecember = currentMonth === 12 && currentDate >= DAY_SAO_JOSE;
    const isMarch = currentMonth === 3 && currentDate <= DAY_SAO_JOSE;
    const isAllowedMonth = allowedMonths.includes(currentMonth);

    return isDecember || isMarch || isAllowedMonth;
  }
}
