import { Component, OnInit } from '@angular/core';
import * as materialMomentAdapter from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { FormControl } from '@angular/forms';
import { TimeRange } from 'src/app/modules/core/helpers/time-range.model';
import { MainService } from 'src/app/modules/core/services/main.service';
import { GetStockAnalysisResponse, TimeIntervalType, TimeSeriesDateType } from 'src/app/modules/core/helpers/stock-info.model';



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
    selectedInterval!: TimeIntervalType
    selectedStock!: string[]
    selectedDate!: string
    selectedInverval!: TimeIntervalType
    stockList: string[] = ['IBM', 'AAPL', 'MSFT', 'AMZN', 'GOOG'];
    timeRange: TimeRange[] = [
        { timeName: '15min', value: '15min' },
        { timeName: '30min', value: '30min' },
        { timeName: '60min', value: '60min' },
        { timeName: 'Günlük', value: 'Daily' },
    ];
    stockType = new FormControl('');

    ngOnInit() {

    }
    dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
        this.selectedDate = dateRangeEnd.value
    }
    sendAnalysisFilter() {
        if (this.selectedInterval == 'Daily') {

            this.mainService.sendStockDetails("TIME_SERIES_INTRADAY", this.selectedDate, this.selectedStock[0], this.selectedInterval).subscribe((metaData) => {
                let symbol = metaData['Meta Data']
                let timeSeries = metaData['Time Series (5min)']

                const flattedTimeSeries: any[] = []

                Object.keys(timeSeries).map(key => {
                    flattedTimeSeries.push({
                        key,
                        ...timeSeries[key as TimeSeriesDateType]
                    })
                })

                console.log(flattedTimeSeries);

                this.mainService.sendTimeSeries.next(flattedTimeSeries)
                this.mainService.sendStockName.next((metaData["Meta Data"]["2. Symbol"] as any))

                // this.mainService.sendTimeSeries.next(timeSeries)
                console.log(metaData)
            })
        }
        else {
            this.mainService.sendStockDetails("TIME_SERIES_DAILY", this.selectedDate, this.selectedStock[0], this.selectedInterval).subscribe((timeSeries: GetStockAnalysisResponse<`Time Series (Daily)`>) => {

                //  Burayı yapamadım :(

            })
        }


    }
}