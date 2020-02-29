import { TemplateSettings } from "./templateSettings";

export interface TemplateFieldData {
  fieldId: string;
  templateId: string;
  formId?: string;
  value?: any;
  settings?: TemplateSettings;
}
