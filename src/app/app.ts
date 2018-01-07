import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderContainerComponent } from './header-container/header-container';
import { HeaderTabsComponent } from './header-tabs/header-tabs';

let routes: Routes = [];
import { IconsModule } from 'meepo-icons';
import { EventModule } from 'meepo-event';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IconsModule,
        EventModule.forRoot()
    ],
    exports: [
        HeaderContainerComponent,
        HeaderTabsComponent
    ],
    declarations: [
        HeaderContainerComponent,
        HeaderTabsComponent
    ],
    providers: [
    ],
})
export class HeaderModule { }
export * from './event';
