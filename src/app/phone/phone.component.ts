import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input()
  user: any;

  constructor() { }

  ngOnInit() {
  }

}
