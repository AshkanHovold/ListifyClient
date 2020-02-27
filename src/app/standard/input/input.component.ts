import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() type: string;
  name: string;
  constructor() {
    this.name = new Date().getDate().toString();
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
