import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/data.service";
import { Constants } from "src/app/shared/constants";
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) { }

  templates: any[];

  async ngOnInit() {
    this.templates = await this.dataService.getAllItems(Constants.TEMPLATE);
    if (environment.debugOn) {
      console.log(this.templates);
    }
  }

  newTemplate() {
    this.router.navigate(["template/new"]);
  }
}
