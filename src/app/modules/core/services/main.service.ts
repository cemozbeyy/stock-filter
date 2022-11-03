import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetStockAnalysisResponse, TimeIntervalType, TimeSeriesType } from '../helpers/stock-info.model';

@Injectable({ providedIn: 'root' })
export class MainService {
    apiURL = environment.apiUrl;

    sendTimeSeries = new BehaviorSubject<string[]>([])
    sendStockName = new BehaviorSubject<string[]>([])

    constructor(private http: HttpClient) { }
    sendStockDetails(timeSeries: string, timeZone: string, stockType: string, selectedInterval: TimeIntervalType) {
        //Seçilen değer günlük ise yazıyor fakat interval dökümnada şart olduğu için statik verdim.
        const zz = selectedInterval !== 'Daily' ? '&interval=' + selectedInterval : "&interval=5min"

        return this.http.get<GetStockAnalysisResponse<`Time Series (${typeof selectedInterval})`>>(this.apiURL + 'query?function=' + timeSeries + '&date=' + timeZone + '&symbol=' + stockType + zz + '&apikey=O5J9Z4IS9RG6S9SA');
    }

}