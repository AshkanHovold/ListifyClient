import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() items: any[];
  @Input() label: string;
  @Input() selectedItem: string = "";
  id: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.id = this.dataService.getNewId();
    this.items = this.items.map((i: any) => {
      return { ...i, id: this.dataService.getNewId() }
    });
    console.log(this.items);
  }



  selectItem(item: any) {
    console.log(item);
  }

  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter<string>();

}
