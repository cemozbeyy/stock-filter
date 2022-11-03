import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ChartComponent
} from "ng-apexcharts";
import { MainService } from 'src/app/modules/core/services/main.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'tst-chart',
  templateUrl: 'tst-chart.component.html',
  styleUrls: ['tst-chart.component.scss']
})

export class TstChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  chartStockValues!: []
  constructor(private mainService: MainService) {
    this.mainService.sendTimeSeries.subscribe((getValues: any) => {
      this.chartStockValues = []
      console.log(getValues["4. close"])
      getValues.forEach((element: any) => {
        this.chartStockValues.push((element["4. close"] as never))
      });
      console.log(this.chartStockValues)
      this.chartOptions = {
        series: [
          {
            name: "Stocks",
            data: this.chartStockValues
          }
        ],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Period",

          ]
        }
      };
    })
  }

  ngOnInit() { }
}