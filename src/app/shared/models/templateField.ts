import { TemplateSettings } from "./templateSettings";

export interface TemplateField {
  templateId: string;
  formId: string;
  value: any;
  settings: TemplateSettings;
}
