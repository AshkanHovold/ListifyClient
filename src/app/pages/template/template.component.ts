import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  constructor() {}
  templates: any[] = [
    { id: 1, name: "Book" },
    { id: 2, name: "Movie" }
  ];

  ngOnInit() {}

  newTemplate() {
    alert("new template");
  }
}
