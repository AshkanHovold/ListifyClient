import { Component, OnInit, Input } from "@angular/core";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";
import { TemplateFieldData } from "src/app/shared/models/templateField";
import { TemplateSettings } from "src/app/shared/models/templateSettings";
import { EventService, AppEventData } from 'src/app/shared/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit, InputField {

  @Input() render: string;
  @Input() data: TemplateFieldData;
  msg: string = "";

  constructor(public inputService: InputService, private eventService: EventService) {
    this.eventService.eventAdded$.subscribe((e: AppEventData) => {
      if (e.type === EventService.VALIDATE_FIELDS && e.data.formId === this.data.formId) {
        if (environment.debugOn) {
          console.log("VALIDATE_FIELDS triggered for this input. Validating fields");
          console.log(this.data);
        }
        this.fieldChanged();
      }
    })
  }

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

    if (this.render === "output") {
      console.log(this.data);
      this.data
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

  fieldChanged() {
    //this.eventService.add({ type: EventService.INPUT_CHANGED, data: { valid: this.validateField(), formId: this.data.formId } });
    let valid = this.validateField();
    this.inputService.updateFormField({ formId: this.data.formId, fieldId: this.data.fieldId, valid: valid, value: this.data.value, type: "text" });
  }

  validateField(): boolean {
    if (this.data.settings.required) {
      let toReturn = this.inputService.requiredField(this.data.value);
      if (!toReturn) {
        this.msg = "Field is required";
      } else {
        this.msg = "";
      }
      return toReturn;
    }
    this.msg = "";
    return true;
  }
}
