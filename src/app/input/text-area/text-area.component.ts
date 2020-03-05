import { Component, OnInit, Input } from '@angular/core';
import { InputField } from 'src/app/shared/models/inputField';
import { TemplateFieldData } from 'src/app/shared/models/templateField';
import { InputService } from 'src/app/shared/input.service';
import { EventService, AppEventData } from 'src/app/shared/event.service';
import { environment } from 'src/environments/environment';
import { TemplateSettings } from 'src/app/shared/models/templateSettings';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit, InputField {
  @Input() data: TemplateFieldData;
  @Input() render: string;
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
    if (this.render === "settings") {
      this.data.settings = {
        required: false,
        validate: this.validateField,
        otherSettings: {}
      }
    }

    if (this.render === "output") {
      this.data.settings = <TemplateSettings>{
        required: false,
        label: ''
      }
    }
  }



  fieldChanged() {
    //this.eventService.add({ type: EventService.INPUT_CHANGED, data: { valid: this.validateField(), formId: this.data.formId } });
    this.inputService.updateFormField({ formId: this.data.formId, fieldId: this.data.fieldId, valid: this.validateField(), value: this.data.value, type: "textarea" });
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
