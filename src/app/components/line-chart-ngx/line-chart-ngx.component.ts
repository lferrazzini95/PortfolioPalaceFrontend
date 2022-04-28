import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import {Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-line-chart-ngx',
  templateUrl: './line-chart-ngx.component.html',
  styleUrls: ['./line-chart-ngx.component.css']
})
export class LineChartNgxComponent implements OnInit {
  
  http_path :string = "http://localhost:8080/";

  chartOption!: EChartsOption;

  data: any = [];

  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getChartData(){
    this.httpClient.get<any>("http://localhost:8080/UBS")
    .pipe(map((obj:any) => {
      let result = obj.map((data: any) => {
        return ({'open': data.open, 'date' : new Date(data.date).toLocaleDateString('de-CH')})
      })
      return result;
   })).subscribe(result => 
    this.updateChart(result.map((r:any)=>{return r.open}), result.map((r:any)=>{return r.date})));
  }
  updateChart(price : any, date : any){
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: date,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: price,
          type: 'line',
        },
      ],
    };
  }

  ngOnInit(): void {   
    this.getChartData();
}
  
}


