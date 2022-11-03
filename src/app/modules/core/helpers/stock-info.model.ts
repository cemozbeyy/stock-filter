export interface stockInfo {
    Information: string,
    Symbol: string,
    LastRefreshed: string
    Interval: string,
    OutputSize: string,
    TimeZone: string
}
export type TimeIntervalType = `${5 | 15 | 30 | 45 | 60}min` | `Daily`
export type TimeSeriesType = `Time Series (${TimeIntervalType})`;
export type TimeSeriesDateType = `${string}-${string}-${string} ${string}:${string}:${string}`;

export interface ITimeSeriesItem {
    "1. open": string,
    "2. high": string,
    "3. low": string,
    "4. close": string,
    "5. volume": string
}

export type TimeSeriesField<T extends TimeSeriesType> = {
    [K in T]: {
        [K in TimeSeriesDateType]: ITimeSeriesItem;
    };
};

export type GetStockAnalysisResponse<T extends TimeSeriesType> = TimeSeriesField<T> & {
    'Meta Data': {
        [key: string]: string;
    };
};

