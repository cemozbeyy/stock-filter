import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TstChartComponent, TstHeaderComponent, TstMainTableComponent, TstSidenavComponent, TstStockAnalysisFilterComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutComponent } from './layout-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//verilen app tek sayfa olduğu için route'u buraya açtım.
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
    TstMainTableComponent,
    TstStockAnalysisFilterComponent,
    TstChartComponent
]


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
