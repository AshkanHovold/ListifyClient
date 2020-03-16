import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import * as _ from 'lodash';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() list: any;
  @Input() items: any;

  itemsAdded: string[];
  rows: any[];
  columnsPerRow: number = 3;
  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    if (this.list && this.list.items) {
      this.itemsAdded = this.list.items.map(i => (i));
    }

    this.rows = _.chunk(this.items, this.columnsPerRow);
  }

  viewItem(itemId: string) {
    this.router.navigate(["/item/", itemId]);
  }

  async addToList(itemId: string): Promise<void> {
    if (!this.list.items) {
      this.list.items = [];
    }
    this.list.items.push(itemId);
    await this.dataService.setDataToStorage(Constants.LIST, this.list.id, this.list);
    this.itemsAdded.push(itemId);
  }

  itemAdded(itemId: string): boolean {
    let found = this.itemsAdded.find(i => i === itemId);
    return (found !== undefined);
  }

}
