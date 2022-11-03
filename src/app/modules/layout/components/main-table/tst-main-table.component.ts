import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/modules/core/services/main.service';

@Component({
    selector: 'tst-main-table',
    templateUrl: 'tst-main-table.component.html',
    styleUrls: ['tst-main-table.component.scss']
})

export class TstMainTableComponent implements OnInit {
    getVal!: string[]
    getStockName!: string[]
    allValue = [{}]
    constructor(private mainService: MainService) {
        this.mainService.sendTimeSeries.subscribe((timeSeries: any) => {
            this.getVal = []
            timeSeries.forEach((element: any) => {

                this.getVal.push(element["4. close"])
            });
            this.mainService.sendStockName.subscribe(stockName => {
                this.getStockName = stockName
            })
            let values = { stockName: this.getStockName, stockValue: this.getVal }
            this.allValue.push(values)
            console.log(this.allValue)
        })
    }

    ngOnInit() { }
}