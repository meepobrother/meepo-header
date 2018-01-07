import {
    Component, OnInit, ViewEncapsulation,
    ContentChild, TemplateRef, Input, ElementRef, Renderer2,
    HostBinding
} from '@angular/core';
import { EventService } from 'meepo-event';
import { HEADER_TABS_SHOWN, HEADER_TABS_HIDDEN } from '../event';
@Component({
    selector: 'header-tabs',
    templateUrl: './header-tabs.html',
    styleUrls: ['./header-tabs.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderTabsComponent implements OnInit {
    @ContentChild('ref') ref: TemplateRef<any>;
    @Input() items: any[] = [];
    @HostBinding('class.animated') _animated: boolean = true;
    constructor(
        public ele: ElementRef,
        public render: Renderer2,
        public event: EventService
    ) {
        this.event.subscribe(HEADER_TABS_SHOWN, () => {
            this.render.removeClass(this.ele.nativeElement, 'tabsSlideOutUp');
            this.render.addClass(this.ele.nativeElement, 'tabsSlideInDown');
        });
        this.event.subscribe(HEADER_TABS_HIDDEN, () => {
            this.render.removeClass(this.ele.nativeElement, 'tabsSlideInDown');
            this.render.addClass(this.ele.nativeElement, 'tabsSlideOutUp');
        });
    }

    ngOnInit() {
        setTimeout(() => {
            console.log(this.ref);
        }, 1000);
    }
}