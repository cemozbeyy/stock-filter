import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/modules/core/services/main.service';

@Component({
    selector: 'tst-main-table',
    templateUrl: 'tst-main-table.component.html',
    styleUrls: ['tst-main-table.component.scss']
})

export class TstMainTableComponent implements OnInit {
    getVal!: string[]
    constructor(private mainService: MainService) {
        this.mainService.sendTimeSeries.subscribe(timeSeries => {
            this.getVal = timeSeries
        })
    }

    ngOnInit() { }
}