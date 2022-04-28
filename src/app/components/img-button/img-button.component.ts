import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-button',
  templateUrl: './img-button.component.html',
  styleUrls: ['./img-button.component.css']
})
export class ImgButtonComponent implements OnInit {

  @Input() img_source : string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
