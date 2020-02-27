import { Component, OnInit, OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() disabled: boolean;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}
}
