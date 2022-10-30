import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TimeRange } from 'src/app/modules/core/helpers/time-range.model';

@Component({
    selector: 'tst-filter',
    templateUrl: 'tst-stock-analysis-filter.component.html',
    styleUrls: ['tst-stock-analysis-filter.component.scss']
})

export class TstStockAnalysisFilterComponent implements OnInit {
    constructor() { }
    selectedTime!: string
    stockList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    timeRange: TimeRange[] = [
        { timeName: '15min' },
        { timeName: '30min' },
        { timeName: '60min' },
        { timeName: 'Günlük' },
    ];
    stockType = new FormControl('');

    ngOnInit() {

    }

}