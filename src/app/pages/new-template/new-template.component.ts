import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-new-template",
  templateUrl: "./new-template.component.html",
  styleUrls: ["./new-template.component.scss"]
})
export class NewTemplateComponent implements OnInit {
  msg: string = "";
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  validate() {}
}
