import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss']
})
export class DisplayInputComponent implements OnInit {

  @Input() type: string;
  @Input() render: string;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
