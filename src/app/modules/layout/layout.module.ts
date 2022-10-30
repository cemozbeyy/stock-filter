import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TstHeaderComponent, TstMainTableComponent, TstSidenavComponent } from './components';
import { MatIconModule } from '@angular/material/icon';

import { LayoutComponent } from './layout-component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    }
]

const COMPONENTS = [
    LayoutComponent,
    TstSidenavComponent,
    TstHeaderComponent,
    TstMainTableComponent
]


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule
    ],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
