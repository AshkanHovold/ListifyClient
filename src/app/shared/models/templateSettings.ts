export interface TemplateSettings {
  required: boolean;
  label?: string;
  validate(): boolean;
  otherSettings?: any;
}
