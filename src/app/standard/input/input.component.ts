import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  name: string;
  constructor() {
    this.name = uuidv4();
    console.log(this.name);
  }

  /**
   * Holds the current value of the slider
   */
  @Input() inputValue: string = "";

  /**
   * Invoked when the model has been changed
   */
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {}
}
