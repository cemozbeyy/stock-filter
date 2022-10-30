import { Component, OnInit } from '@angular/core';
import * as materialMomentAdapter from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { FormControl } from '@angular/forms';
import { TimeRange } from 'src/app/modules/core/helpers/time-range.model';


export const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY/DD/MM',
    },
    display: {
        dateInput: 'YYYY/DD/MM',
        monthYearLabel: 'YYYY MMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY MMM',
    },
};


@Component({
    selector: 'tst-filter',
    templateUrl: 'tst-stock-analysis-filter.component.html',
    styleUrls: ['tst-stock-analysis-filter.component.scss'],
    providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
            provide: DateAdapter,
            useClass: materialMomentAdapter.MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },

        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ]
})

export class TstStockAnalysisFilterComponent implements OnInit {
    constructor() {

    }
    selectedTime!: string
    selectedStock!: string[]
    selectedDate!: string
    stockList: string[] = ['IBM', 'AAPL', 'MSFT', 'AMZN', 'GOOG'];
    timeRange: TimeRange[] = [
        { timeName: '15min' },
        { timeName: '30min' },
        { timeName: '60min' },
        { timeName: 'Günlük' },
    ];
    stockType = new FormControl('');

    ngOnInit() {

    }
    dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
        console.log(dateRangeStart.value);
        console.log(dateRangeEnd.value);
    }
}