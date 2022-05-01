import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titleImage : string = '';
  @Output() tickerEvent = new EventEmitter<string>();
  @Input() ticker : any;

  constructor() { }

  sendTicker($event: any) {
    this.ticker = $event.target.value;
    this.tickerEvent.emit(this.ticker);
  }

  ngOnInit(): void {
  }

}
