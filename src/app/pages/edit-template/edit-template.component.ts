import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: "app-edit-template",
  templateUrl: "./edit-template.component.html",
  styleUrls: ["./edit-template.component.scss"]
})
export class EditTemplateComponent implements OnInit {
  templateId: string;
  template: any;
  selectedItem:string = "";
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  async ngOnInit() {
    this.templateId = this.route.snapshot.paramMap.get("id");
    this.template = await this.dataService.getItem(Constants.TEMPLATE, this.templateId);
  }
}
