import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options: any[];
  @Input() inputValue: string = "";
  @Input() label: string = "";
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  id: string;
  constructor(private dataService: DataService) {
    this.id = this.dataService.getNewId();
  }

  ngOnInit() {
  }

}
