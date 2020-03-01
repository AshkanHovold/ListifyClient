import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/data.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

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
  selectTest = "";
  constructor(private dataService: DataService, private router: Router) { }

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

  async createTemplate() {
    var id = this.dataService.getNewId();
    await this.dataService.setItem(this.TEMPLATE, id, {
      id: id,
      name: this.templateName,
      fields: []
    });
    this.router.navigate(["/templates"]);
  }
}
