import { Component, OnInit, Input } from "@angular/core";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";
import { TemplateFieldData } from "src/app/shared/models/templateField";

import { EventService, AppEventData } from 'src/app/shared/event.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/shared/data.service';
import { TemplateSettings } from 'src/app/shared/models/templateSettings';

export class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, InputField {

  @Input() render: string;
  @Input() data: TemplateFieldData;
  imageId: string;
  imageData: string;
  msg: string = "";
  selectedFile: ImageSnippet;

  constructor(public inputService: InputService, private eventService: EventService, private sanitizer: DomSanitizer, private dataService: DataService) {
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
    this.imageId = this.dataService.getNewId();
    //adding new field to template, setting default settings that can be changed from ui
    if (this.render === "settings") {
      this.data.settings = {
        required: false,
        validate: this.validateField,
        otherSettings: {}
      }
    }

    if (this.render === "input") {
      //this.data = this.inputService.getNewTemplateInput
      this.data.data = { image: new ImageSnippet('', null) };
    }

    if (this.render === 'output') {
      //this.data.settings = <TemplateSettings>{ required: false, label: "" };
      this.imageData = this.data.data.image.src;
    }
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      if (environment.debugOn) {
        console.log(this.selectedFile);
      }
      this.fieldChanged();
      // this.imageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {

      //   },
      //   (err) => {

      //   })
    });

    reader.readAsDataURL(file);
  }

  fieldChanged() {
    this.data.image = this.selectedFile;
    //this.eventService.add({ type: EventService.INPUT_CHANGED, data: { valid: this.validateField(), formId: this.data.formId } });
    let valid = this.validateField();
    this.inputService.updateFormField(
      {
        type: "image",
        valid: valid,
        data: this.data
      });
  }

  validateField(): boolean {
    if (this.data.settings.required) {
      let toReturn = this.inputService.requiredField(this.selectedFile);
      if (environment.debugOn) {
        console.log(`Validating image field. Status: ${toReturn}`);
      }
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
