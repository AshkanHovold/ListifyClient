import { Injectable } from "@angular/core";
import { InputItem } from "./models/inputItem";
import { TextComponent } from "../input/text/text.component";
import { TemplateFieldData } from "./models/templateField";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root"
})
export class InputService {
  constructor() {}
  fieldChanged(input: any) {
    console.log(input);
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
}
