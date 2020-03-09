import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import * as _ from "lodash";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  items: any[];
  nrOfItemsPerRow: number = 3;
  rows: any[] = [];
  padding: string = "";

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.items = await this.dataService.getAllDataFromStorage(Constants.ITEM);

    this.rows = this.getItemsInRows(this.nrOfItemsPerRow);
    console.log(this.rows);
    if (environment.debugOn) {
      console.log(this.items);
    }

    let uniqueListOfTemplateIds = await this.getAllTemplateIds();
    let templates: any[] = await this.getAllTemplates(uniqueListOfTemplateIds);

    //console.log(templates);    
  }

  getItemsInRows(nrOfItemsPerRow: number): any[] {
    let rows = _.chunk(this.items, nrOfItemsPerRow);
    return rows;
    //get totalNrOfItems
    //calculateNrOfRows and create rows in Array
    //go through all items and push them into right row
  }

  async getAllTemplates(uniqueListOfTemplateIds: string[]): Promise<any[]> {
    let toReturn: any[] = [];
    for (let i = 0; i < uniqueListOfTemplateIds.length; i++) {
      const templateId = uniqueListOfTemplateIds[i];
      let templateToPush = await this.dataService.getDataFromStorage(Constants.TEMPLATE, templateId);
      toReturn.push(templateToPush);
    }
    return toReturn;
  }


  async getAllTemplateIds(): Promise<string[]> {
    let uniqueListOfTemplateIds: string[] = [];
    await this.items.forEach(async i => {
      let found = uniqueListOfTemplateIds.find(t => t == i.templateId);
      if (!found) {
        uniqueListOfTemplateIds.push(i.templateId);
      }
    });

    return uniqueListOfTemplateIds;
  }
}
