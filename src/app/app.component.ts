import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioPalaceFrontend';
  ticker = "";
  companyInfo : any;

  receiveTicker($event: any) {
    this.ticker = $event;
  }

  updateInfoBox($event : any){
    console.log("Receving Event at Root" + JSON.stringify($event));
    this.companyInfo = $event;
  }

}