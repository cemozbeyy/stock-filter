import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MainService {
    apiURL = environment.apiUrl;
    constructor(private http: HttpClient) { }
    sendStockDetails(timeSeries: string, timeZone: string, stockType: string, selectedInterval?: string) {
        return this.http.get(this.apiURL + 'query?function=' + timeSeries + '&date=' + timeZone + '&symbol=' + stockType + '&interval=' + selectedInterval + '&apikey=O5J9Z4IS9RG6S9SA');
    }

}