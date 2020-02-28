import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() items: any[];
  @Input() name:string;
  @Input() selectedItem:string = "";
  constructor() { }

  ngOnInit() {
  }

  selectItem(item: any) {
    console.log(item);
  }

  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter<string>();

}
