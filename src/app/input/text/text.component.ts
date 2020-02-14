import { Component, OnInit, Input } from "@angular/core";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit, InputField {
  @Input() render: string;
  thisField: any;
  constructor(public inputService: InputService) {
    this.thisField = { value: "" };
  }

  ngOnInit() {}
}
