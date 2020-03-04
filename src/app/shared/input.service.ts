import { Injectable } from "@angular/core";
import { InputItem } from "./models/inputItem";
import { TextComponent } from "../input/text/text.component";
import { TemplateFieldData } from "./models/templateField";
import { v4 as uuidv4 } from "uuid";
import { EventService, AppEventData } from './event.service';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { Constants } from './constants';

@Injectable({
  providedIn: "root"
})
export class InputService {


  forms: any[];
  constructor(private eventService: EventService, private dataService: DataService) {
    this.forms = [];
    this.eventService.eventAdded$.subscribe((e: AppEventData) => {
      if (e.type === EventService.INPUT_CHANGED) {
        this.fieldChanged(e.data);
      }
    });
  }
  fieldChanged(input: any) {
    console.log(input);
  }

  newForm(formId: string, fields: any[], templateId: string) {
    let fieldStates = fields.map(f => ({ fieldId: f.fieldId, valid: true, value: '' }));
    this.forms.push({ formId: formId, templateId: templateId, valid: true, fields: fieldStates, fieldsValidated: 0 });
  }

  getAvailableInputs(): InputItem[] {
    // return [
    //   new InputItem(TextComponent)
    // ]
    return [];
  }

  getNewTemplateFieldData(templateId: string): TemplateFieldData {
    return {
      fieldId: this.getNewId(),
      templateId: templateId,
      formId: "",
      value: ""
    };
  }

  getNewId(): string {
    return uuidv4();
  }

  getAvailableFieldTypes(): any[] {
    //extend this array with new input components added to the application.
    //display input component needs to be updated as well
    return [
      { name: "Text", value: "text" },
      { name: "Text area", value: "textarea" }
    ];
  }

  updateFormField(formField: any) {
    let form = this.forms.find(f => f.formId === formField.formId);
    let field = form.fields.find(f => f.fieldId === formField.fieldId);

    field.valid = formField.valid;
    field.value = formField.value;
    if (environment.debugOn) {
      console.log(`One more field validated for ${form.formId}`);
    }
    form.fieldsValidated += 1;
    if (form.fieldsValidated == form.fields.length) {
      console.log(`All fields validated for ${form.formId}`);
      this.eventService.add({ type: EventService.FORM_VALIDATION_DONE, data: { formId: form.formId } });
    }
    this.updateFormStatus(form.formId);
  }

  updateFormStatus(formId: string) {
    let form = this.forms.find(f => f.formId == formId);
    let notValidFields = form.fields.filter(f => f.valid == false);
    if (environment.debugOn) {
      console.log(`notValidFields: ${notValidFields.length}`);
    }
    if (notValidFields.length > 0) {
      form.valid = false;
    } else {
      form.valid = true;
    }

  }

  getNewItem(templateId: string, formId: string, fields: any): any {
    let toReturn = {
      formId: formId,
      templateId: templateId,
      fields: this.deepCopy(fields)
    };

    toReturn.fields.forEach(f => f.formId = formId);
    return toReturn;
  }

  deepCopy(toCopy: any): any {
    return JSON.parse(JSON.stringify(toCopy));
  }

  requiredField(value: any): boolean {
    if (value) {
      return true;
    }
    return false;
  }

  getFormStatus(formId: string): boolean {
    let form = this.forms.find(f => f.formId === formId);
    if (environment.debugOn) {
      console.log(form);
    }
    return form.valid;
  }

  formValidationStarted(formId: string) {
    let form = this.forms.find(f => f.formId === formId);
    if (environment.debugOn) {
      console.log(`Setting fieldsValidated to 0, starting validation for all fields for ${formId}`);
    }
    form.fieldsValidated = 0;
  }

  async saveItem(formId: string): Promise<void> {
    let form = this.forms.find(f => f.formId === formId);
    await this.dataService.setDataToStorage(Constants.ITEM, this.getNewId(), form);
  }
}
