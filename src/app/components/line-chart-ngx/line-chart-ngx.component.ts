import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { color, EChartsOption } from 'echarts';
import {Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { colorScheme } from 'src/environments/environment';

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

  dataX: any = [];
  dataY: any = [];

  @Input() range : any;
  @Input() startDate : any;
  @Input() endDate : any;
  @Input() ticker : any;
  @Input()companyInfo : any;
  @Output() companyInfoEvent = new EventEmitter<object>();

  ngOnChanges(changes:any) {
    if(!this.ticker)
      return;
    this.updateData();
  }
 
  //@Input() selectedTicker : string;

  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public updateData(){
    if(!this.ticker)
      return;
    const startDate = this.startDate.format('DD') + this.startDate.format('MM') + this.startDate.format('YYYY');
    const endDate = this.endDate.format('DD') + this.endDate.format('MM') + this.endDate.format('YYYY');
    this.httpClient.get<any>("http://localhost:8080/" + this.ticker+ "?fromDate=" + startDate + "&toDate=" + endDate)
      .subscribe(
        result => this.processData(result)
          );
  }

  public processData(data:any){
    console.log(data);
    this.dataY = data.openData;
    this.dataX = data.timestamps;

    this.dataX.forEach((val: any, index : any) => 
      this.dataX[index] = new Date(this.dataX[index]*1000).toLocaleDateString("de-CH"));
    this.updateChart(); 

    this.companyInfo = data.companyInformation;
    if(this.companyInfo){
        console.log("Emitting Event Company Info");
        this.companyInfo.ticker = this.ticker;
        this.companyInfoEvent.emit(this.companyInfo);
    }
  }

  public updateChart(){

    this.chartOption = {
      xAxis: {
        type: 'category',
        data: this.dataX,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.dataY,
          type: 'line',
          showSymbol: false,
          itemStyle: {color: colorScheme.colorAccent},
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        }
      }
    };
  }

  ngOnInit(): void {
    this.startDate = moment("01/01/2020", "DD/MM/YYYY")
    this.endDate = moment("01/02/2022", "DD/MM/YYYY")
    this.updateData();
}
  
}


