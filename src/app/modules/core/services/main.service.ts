import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MainService {
    apiURL = environment.apiUrl;
    sendTimeSeries = new BehaviorSubject<string[]>([])
    constructor(private http: HttpClient) { }
    sendStockDetails(timeSeries: string, timeZone: string, stockType: string, selectedInterval?: string) {
        //Seçilen değer günlük ise yazıyor fakat interval dökümnada şart olduğu için statik verdim.
        const zz = selectedInterval ? '&interval=' + selectedInterval : "&interval=5min"

        return this.http.get(this.apiURL + 'query?function=' + timeSeries + '&date=' + timeZone + '&symbol=' + stockType + zz + '&apikey=O5J9Z4IS9RG6S9SA');
    }

}