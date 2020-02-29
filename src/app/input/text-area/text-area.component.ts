import { Component, OnInit, Input } from '@angular/core';
import { InputField } from 'src/app/shared/models/inputField';
import { TemplateFieldData } from 'src/app/shared/models/templateField';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit, InputField {
  @Input() data: TemplateFieldData;
  @Input() render: string;

  constructor() { }

  ngOnInit() {
    if (this.render === "settings") {
      this.data.settings = {
        required: false,
        validate: this.validateField,
        otherSettings: {}
      }
    }
  }

  validateField(): boolean {
    return true;
  }

}
