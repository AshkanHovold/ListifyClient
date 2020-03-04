import { TemplateSettings } from "./templateSettings";
import { ImageSnippet } from 'src/app/input/image/image.component';

export interface TemplateFieldData {
  fieldId: string;
  templateId: string;
  formId?: string;
  value?: any;
  settings?: TemplateSettings;
  image?: ImageSnippet;
}
