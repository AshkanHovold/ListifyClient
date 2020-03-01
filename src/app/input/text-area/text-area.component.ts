import { Component, OnInit, Input } from '@angular/core';
import { InputField } from 'src/app/shared/models/inputField';
import { TemplateFieldData } from 'src/app/shared/models/templateField';
import { InputService } from 'src/app/shared/input.service';
import { EventService, AppEventData } from 'src/app/shared/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit, InputField {
  @Input() data: TemplateFieldData;
  @Input() render: string;

  constructor(public inputService: InputService, private eventService: EventService) {
    this.eventService.eventAdded$.subscribe((e: AppEventData) => {
      if (environment.debugOn) {
        console.log("we got here");
      }
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
  }



  fieldChanged() {
    //this.eventService.add({ type: EventService.INPUT_CHANGED, data: { valid: this.validateField(), formId: this.data.formId } });
    this.inputService.updateFormField({ formId: this.data.formId, fieldId: this.data.fieldId, valid: this.validateField() });
  }

  validateField(): boolean {
    if (this.data.settings.required) {
      return this.inputService.requiredField(this.data.value);
    }
    return true;
  }

}
