import {
  Component, ChangeDetectionStrategy,
} from '@angular/core';
import { EventService } from 'meepo-event';
import { HEADER_SHOWN, HEADER_HIDDEN, HEADER_TABS_HIDDEN, HEADER_TABS_SHOWN } from '../../src/app/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  tabs: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];


  constructor(
    public event: EventService
  ) {
    setInterval(() => { }, 3000);
  }

  showHeader() {
    this.event.publish(HEADER_SHOWN, '');
  }

  hideHeader() {
    this.event.publish(HEADER_HIDDEN, '');
  }

  showHeaderTabs() {
    this.event.publish(HEADER_TABS_SHOWN, '');
  }

  hideHeaderTabs() {
    this.event.publish(HEADER_TABS_HIDDEN, '');
  }
}
