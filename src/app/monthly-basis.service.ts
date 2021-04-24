import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBasisService {

  constructor(private http: HttpClient) { }

  public search() {
    return this.http.get('https://api-metrics.flurry.com/public/v1/data/appEvent/month/event;show=name?metrics=occurrences&dateTime=2021-02-01/2021-05-01&filters=event|name-contains[ON_BOARDING_SUCCESSFUL_EVT]&token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImZsdXJyeS56dXVsLnByb2Qua2V5c3RvcmUua2V5LjIifQ.eyJpc3MiOiJodHRwczovL3p1dWwuZmx1cnJ5LmNvbTo0NDMvdG9rZW4iLCJpYXQiOjE2MTkxMTY1ODcsImV4cCI6MzMxNzYwMjUzODcsInN1YiI6IjQ3NTk3NCIsImF1ZCI6IjQiLCJ0eXBlIjo0LCJqdGkiOiIxMjMxNiJ9.Ol2S5cBps8mUVx5_G6JqKSs4cJZeQI6VfTOcLJVYUvQ');
  }
}
