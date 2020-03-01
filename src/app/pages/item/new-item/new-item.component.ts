import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  templateId: string;
  template: any;
  formId: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.formId = this.dataService.getNewId();
    this.templateId = this.route.snapshot.paramMap.get('id');
    this.template = await this.dataService.getItem(Constants.TEMPLATE, this.templateId);

    if (environment.debugOn) {
      console.log(this.templateId);
      console.log(this.template);
    }
  }

}
