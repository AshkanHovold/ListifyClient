import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  constructor(private router: Router) {}
  test: string = "hmm";
  test2: string = "another";
  templates: any[] = [
    { id: 1, name: "Book" },
    { id: 2, name: "Movie" }
  ];

  ngOnInit() {}

  newTemplate() {
    this.router.navigate(["template/new"]);
  }
}
