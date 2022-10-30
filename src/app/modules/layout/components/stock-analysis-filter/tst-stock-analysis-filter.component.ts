import { Component, OnInit } from '@angular/core';
import * as materialMomentAdapter from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { FormControl } from '@angular/forms';
import { TimeRange } from 'src/app/modules/core/helpers/time-range.model';
import { MainService } from 'src/app/modules/core/services/main.service';



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
    constructor(private mainService: MainService) {

    }
    selectedInterval!: string
    selectedStock!: string[]
    selectedDate!: string
    selectedInverval!: string
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
        this.selectedDate = dateRangeEnd.value
    }
    sendAnalysisFilter() {
        if (this.selectedInterval == 'Günlük') {
            this.selectedInverval = "TIME_SERIES_INTRADAY"
            this.mainService.sendStockDetails(this.selectedInverval, this.selectedDate, this.selectedStock[0]).subscribe((metaData: any) => {
                let symbol = metaData['Meta Data']
                let timeSeries = metaData['Time Series (5min)']
                this.mainService.sendTimeSeries.next(timeSeries)
                console.log(symbol['2. Symbol'])
            })
        }
        else {
            this.selectedInverval = "TIME_SERIES_DAILY"
            this.mainService.sendStockDetails(this.selectedInverval, this.selectedDate, this.selectedStock[0], this.selectedInterval).subscribe((a) => {
                console.log(a)
                // a['Meta Data']
            })
        }


    }
}