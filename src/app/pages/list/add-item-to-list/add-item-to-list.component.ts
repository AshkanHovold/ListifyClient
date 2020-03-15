import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import * as _ from "lodash";

@Component({
  selector: 'app-add-item-to-list',
  templateUrl: './add-item-to-list.component.html',
  styleUrls: ['./add-item-to-list.component.scss']
})
export class AddItemToListComponent implements OnInit {
  searchTerm: string = "";
  listId: string;
  list: any;
  optionSelected: string = "all";
  msg: string = "";
  valid: boolean = false;
  availableTemplates: any[];
  itemsFound: any[] = [];
  rows: any[];
  selectedTemplate: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.list = await this.dataService.getDataFromStorage(Constants.LIST, this.listId);
    let templates = await this.dataService.getAllDataFromStorage(Constants.TEMPLATE);
    this.availableTemplates = templates.map(t => ({ name: t.name, value: t.id }));
  }

  async performSearch() {
    this.validate();
    if (!this.validate) {
      return;
    }

    let all = this.optionSelected === "all";
    if (all) {
      let items = await this.dataService.getAllDataFromStorage(Constants.ITEM);
      this.itemsFound = this.getSearchResult(items, this.searchTerm);
      this.rows = _.chunk(this.itemsFound, 3);
    } else {
      let template = await this.dataService.getDataFromStorage(Constants.TEMPLATE, this.selectedTemplate);
      let items = [];
      for (let i = 0; i < template.items.length; i++) {
        const item = template.items[i];
        let toPush = await this.dataService.getDataFromStorage(Constants.ITEM, item.itemId);
        items.push(toPush);
        this.itemsFound = this.getSearchResult(items, this.searchTerm);
        this.rows = _.chunk(this.itemsFound, 3);
      }
    }
  }
  getSearchResult(items: any[], searchTerm: string): any[] {
    let toReturn = [];
    items.forEach(i => {
      let values = i.fields.map(f => (f.data.value));
      let found = values.filter((v: string) => v.toLowerCase().includes(searchTerm.toLowerCase()));
      if (found.length > 0) {
        toReturn.push(i);
      }
    })
    return toReturn;
  }

  validate() {
    if (!this.searchTerm) {
      this.msg = "Field is required";
      this.valid = false;
    } else if (this.searchTerm.length < 3) {
      this.msg = "Atleast 3 characters required";
      this.valid = false;
    } else if (this.optionSelected === 'one' && !this.selectedTemplate) {
      this.msg = "Select a template or select all templates";
      this.valid = false;
    } else {
      this.msg = "";
      this.valid = true;
    }
  }

}
