import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
import { InputService } from 'src/app/shared/input.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() label: string;
  name: string;
  constructor(private dataService: DataService, public inputService: InputService) {
    this.name = this.dataService.getNewId();
    if (environment.debugOn) {
      console.log(this.name);
    }
  }

  /**
   * Holds the current value of the slider
   */
  @Input() inputValue: string = "";

  /**
   * Invoked when the model has been changed
   */
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() { }

}
