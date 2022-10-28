import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TstHeaderComponent, TstMainTableComponent, TstSidenavComponent } from './components';

import { LayoutComponent } from './layout-component';



const COMPONENTS = [
    LayoutComponent,
    TstSidenavComponent,
    TstHeaderComponent,
    TstMainTableComponent
]


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
