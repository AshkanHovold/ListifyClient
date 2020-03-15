import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  item: any;
  itemId: string;
  template: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    this.item = await this.dataService.getDataFromStorage(Constants.ITEM, this.itemId);
    this.template = await this.dataService.getDataFromStorage(Constants.TEMPLATE, this.item.templateId);
  }

}
