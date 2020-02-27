import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/data.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-new-template",
  templateUrl: "./new-template.component.html",
  styleUrls: ["./new-template.component.scss"]
})
export class NewTemplateComponent implements OnInit {
  msg: string = "";
  templateName: string = "";
  items: any[];
  valid: boolean;
  TEMPLATE = "template";
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.valid = false;
  }

  async validate() {
    var templates = await this.dataService.getAllItems(this.TEMPLATE);
    var found = templates.filter(
      t => t.templateName.toLowerCase() == this.templateName.toLowerCase()
    );
    if (found.length > 0) {
      this.valid = false;
      this.msg = "Template already exists";
    } else {
      this.valid = true;
      this.msg = "";
    }
  }

  async getTemplates() {
    var templates = await this.dataService.getAllItems(this.TEMPLATE);
    if (environment.debugOn) {
      console.log(templates);
    }
  }

  createTemplate() {
    var id = this.dataService.getNewId();
    this.dataService.setItem(this.TEMPLATE, id, {
      templateId: id,
      templateName: this.templateName
    });
  }
}
