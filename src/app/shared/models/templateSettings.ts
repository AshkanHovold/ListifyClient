export interface TemplateSettings {
  required: boolean;
  validate(): boolean;
  otherSettings?: any;
}
