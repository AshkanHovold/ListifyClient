import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-template",
  templateUrl: "./edit-template.component.html",
  styleUrls: ["./edit-template.component.scss"]
})
export class EditTemplateComponent implements OnInit {
  templateId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.templateId = this.route.snapshot.paramMap.get("id");
  }
}
