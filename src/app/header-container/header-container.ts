import {
    Component, OnInit, ViewChild, ElementRef,
    AfterContentInit, ViewEncapsulation, Renderer2,
    HostBinding
} from '@angular/core';
import { EventService } from 'meepo-event';
import { HEADER_CHANGE, HEADER_SHOWN, HEADER_HIDDEN } from '../event';

@Component({
    selector: 'header-container',
    templateUrl: './header-container.html',
    styleUrls: ['./header-container.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderContainerComponent implements AfterContentInit {
    @ViewChild('left') left: ElementRef;
    @ViewChild('right') right: ElementRef;

    @HostBinding('class.animated') _animated: boolean = true;
    width: any;
    constructor(
        public event: EventService,
        public render: Renderer2,
        public ele: ElementRef
    ) {
        this.event.subscribe(HEADER_SHOWN, () => {
            this.render.removeClass(this.ele.nativeElement, 'headerSlideOutUp');
            this.render.addClass(this.ele.nativeElement, 'headerSlideInDown');
        });
        this.event.subscribe(HEADER_HIDDEN, () => {
            this.render.removeClass(this.ele.nativeElement, 'headerSlideInDown');            
            this.render.addClass(this.ele.nativeElement, 'headerSlideOutUp');
        });
    }
    ngAfterContentInit() {
        let width = Math.max(this.left.nativeElement.clientWidth, this.right.nativeElement.clientWidth);
        this.width = width;
    }
}