import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info-box',
  templateUrl: './company-info-box.component.html',
  styleUrls: ['./company-info-box.component.css']
})
export class CompanyInfoBoxComponent implements OnInit {

  @Input() companyInfo : any = null;
  @Input() country : any = null;
  @Input() numberOfEmployees : any = null;
  @Input() website : any = null;
  @Input() summary : any = null;
  @Input() sector : any = null;
  @Input() ticker : any = null;
  updated : boolean = false;

  ngOnChanges(changes : any){
    console.log("Updating Company Information: " + this.companyInfo);
    console.log(this.updated);
    if(this.companyInfo === undefined)
      return;
    this.country = this.companyInfo.country;
    this.numberOfEmployees = this.companyInfo.fullTimeEmployees;
    this.website = this.companyInfo.website;
    this.summary = this.companyInfo.longBusinessSummary;
    this.ticker = this.companyInfo.ticker;
    this.sector = this.companyInfo.sector;
    this.updated = true;
    console.log(this.updated);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
