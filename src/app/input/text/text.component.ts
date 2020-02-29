import { Component, OnInit, Input } from "@angular/core";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";
import { TemplateFieldData } from "src/app/shared/models/templateField";
import { TemplateSettings } from "src/app/shared/models/templateSettings";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit, InputField {

  @Input() render: string;
  @Input() data: TemplateFieldData;

  constructor(public inputService: InputService) { }

  ngOnInit() {
    //adding new field to template, setting default settings that can be changed from ui
    if (this.render === "settings") {
      this.data.settings = {
        required: false,
        validate: this.validateField,
        otherSettings: {}
      }
    }

    if (this.render === "input") {
      //this.data = this.inputService.getNewTemplateInput
    }
    // this.data = <TemplateField>{
    //   value: "",
    //   formId: this.formId,
    //   templateId: this.templateId,
    //   settings: <TemplateSettings>{
    //     required: false
    //   }
    // };
  }

  validateField(): boolean {
    return true;
  }
}
