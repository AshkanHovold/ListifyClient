import { Component, OnInit, Input } from "@angular/core";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";
import { TemplateField } from "src/app/shared/models/templateField";
import { TemplateSettings } from "src/app/shared/models/templateSettings";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit, InputField {
  thisField: TemplateField;
  @Input() render: string;
  @Input() formId: string;
  @Input() templateId: string;

  constructor(public inputService: InputService) {}

  ngOnInit() {
    this.thisField = <TemplateField>{
      value: "",
      formId: this.formId,
      templateId: this.templateId,
      settings: <TemplateSettings>{
        required: false
      }
    };
  }
}
